const window = require('xwindow')
const actualize = require('actualize')
const events = require('./events')

const { CustomEvent, DocumentFragment, EventTarget, Node } = window
const SPECIAL_PROPS = {
  children : true,
  className : true,
  key : true,
  localName : true,
  node : true,
}

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @abstract
 */
class DomNode
{
  state = {}

  static SPECIAL_PROPS = SPECIAL_PROPS

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.props = props = normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    this.refs = {}
    if(props.key) {
      this.key = props.key
    }
  }

  /**
   * @returns {EventTarget}
   */
  createNode() {
    return new EventTarget
  }

  /**
   * @param {boolean} [deep]
   * @returns {this}
   */
  init(deep) {
    const children = normalizeChildren(this.render())
    this.node.append(...children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
    this.setProps()
  }

  setProps() {
    let name, value
    for(name in this.props) {
      value = this.props[name]
      if(SPECIAL_PROPS[name]) {
        continue
      }
      if(name in this) {
        this[name] = value
      }
    }
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    if(state) {
      if(typeof state === 'function') {
        state = state(this.state)
      }
      Object.assign(this.state, state)
    }
    this._render()
    this.componentDidUpdate(this.props, prevState)
  }

  _render() {
    const fragment = new DocumentFragment
    const refs = Object.assign({}, this.refs)
    const children = normalizeChildren(this.render())
    Object.assign(this.refs, refs)
    fragment.append(...children.map(child => child.node || child))
    actualize(this.node, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
      nodeWillUpdate,
      nodeDidUpdate,
      childrenWillUpdate,
      childrenDidUpdate,
      nodeWillUnmount,
    })
  }

  /**
   * @return {*}
   */
  render() {
    return this.props.children
  }

  componentDidMount() {
    void null
  }

  componentDidUpdate() {
    void null
  }

  componentWillUnmount() {
    void null
  }

  /**
   * @param {boolean} [keepNode]
   */
  destroy(keepNode = false) {
    if(!this.node) {
      return
    }
    this.componentWillUnmount()
    this.removeAllListeners()
    for(const node of this.node.children) {
      node.__instance?.destroy(true)
    }
    keepNode || this.node.remove()
    this.node.__instance = null
    this.node = null
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}} [dict]
   * @param {boolean} [dict.bubbles=false]
   * @param {boolean} [dict.cancelable=false]
   * @param {*} [dict.detail]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event === 'string') {
      const description = events[event] || [CustomEvent]
      const [constructor, bubbles, cancelable] = description
      if(!dict) {
        dict = {
          bubbles : bubbles || false,
          cancelable : cancelable || false,
        }
      }
      event = new constructor(event, dict)
    }
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string} eventName
   * @param {function} callback
   * @param {{context,capture,once,passive}|boolean|DomNode|*} [options]
   * @param {DomNode} [options.context=this]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   */
  on(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof DomNode) {
      options = { context : options }
    }
    const context = options.context || this
    let listeners = context.__handlers.get(eventName)
    listeners || context.__handlers.set(eventName, listeners = new Map)
    if(listeners.has(callback)) {
      return
    }
    const listener = event => {
      options.once && listeners.delete(callback)
      callback.call(context, event, event.target.__instance)
    }
    listener.__target = this.node
    listener.__options = options
    listeners.set(callback, listener)
    this.node.addEventListener(eventName, listener, {
      capture : options.capture || false,
      once : options.once || false,
      passive : options.passive || false,
    })
  }

  /**
   * @param {string} eventName
   * @param {function} callback
   * @param {{context,capture}|boolean|DomNode|*} [options]
   * @param {DomNode} [options.context=this]
   * @param {boolean} [options.capture=false]
   */
  off(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof DomNode) {
      options = { context : options }
    }
    const context = options.context || this
    let listeners = context.__handlers.get(eventName)
    if(!listeners?.has(callback)) {
      return
    }
    this.node.removeEventListener(eventName, listeners.get(callback), {
      capture : options.capture,
    })
    listeners.delete(callback)
    listeners.size || context.__handlers.delete(eventName)
  }

  removeAllListeners() {
    for(const [eventName, listeners] of this.__handlers.entries()) {
      this.__handlers.delete(eventName)
      if(typeof listeners === 'function') {
        this.node[eventName] = null
        continue
      }
      for(const listener of listeners.values()) {
        listener.__target.removeEventListener(eventName, listener, {
          capture : listener.__options.capture,
        })
      }
      listeners.clear()
    }
  }

  /**
   * @param {string[]} events
   */
  static defineEvents(events) {
    for(const type of events) {
      const name = 'on' + type
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        set(callback) {
          if(callback) {
            this.node[name] = e => callback.call(this, e, e.target.__instance)
            this.__handlers.set(name, callback)
            return
          }
          this.node[name] = null
          this.__handlers.delete(name)
        },
        get() {
          return this.__handlers.get(name) || null
        },
      })
    }
  }

  /**
   * @param {string[]} methods
   */
  static defineMethods(methods) {
    for(const name of methods) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        writable : true,
        value(...args) {
          return this.node[name](...args)
        },
      })
    }
  }

  /**
   * @param {string[]} props
   * @param {boolean} [setters]
   */
  static defineProps(props, setters = false) {
    for(const name of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[name]
        },
      }
      if(setters) {
        desc.set = function(value) {
          if(value !== undefined) {
            this.node[name] = value
          }
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  /**
   * @param {{}} [props]
   * @param {Node} [parentNode]
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props = normalizeProps(props))
    if(!parentNode) {
      instance.init(true)
      props.node && componentDidMount(props.node)
      return instance
    }
    const fragment = new DocumentFragment
    fragment.append(instance.node)
    actualize(parentNode, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
    })
    return instance
  }
}

/**
 * @param {*} [props]
 * @return {{}}
 */
function normalizeProps(props) {
  if(props?.constructor !== Object) {
    props = { children : props }
  }
  else if(!props.children) {
    props.children = []
  }
  return props
}

/**
 * @param {*} [children]
 * @return {(*|DomNode|string)[]}
 */
function normalizeChildren(children) {
  const result = []
  for(const child of [children].flat(Infinity)) {
    if(child === false || child === null || child === undefined) {
      continue
    }
    result.push(child)
  }
  return result
}

/**
 * @param {Element} node
 */
function componentDidMount(node) {
  node.__instance?.componentDidMount()
  for(const child of node.children) {
    componentDidMount(child)
  }
}

/**
 * @param {Element} node
 * @return {string}
 */
function getKey(node) {
  return node.__instance?.key || node.id
}

/**
 * @param {ChildNode|Element} nodeB
 */
function nodeWillMount(nodeB) {
  nodeB.__instance?.init(true)
}

/**
 * @param {ChildNode|Element} nodeB
 */
function nodeDidMount(nodeB) {
  nodeB.__instance && componentDidMount(nodeB)
}

/**
 * @param {Element} nodeA
 * @param {Element} nodeB
 */
function nodeWillUpdate(nodeA, nodeB) {
  const instanceA = nodeA.__instance
  const instanceB = nodeB.__instance
  if(!instanceA || !instanceB) {
    return
  }
  if(instanceA.constructor === instanceB.constructor) {
    const props = instanceA.props
    instanceB.init()
    instanceA.props = instanceB.props
    instanceA._render()
    actualize(nodeA, nodeB, { childrenWillUpdate })
    instanceA.componentDidUpdate(props, instanceA.state)
    return false
  }
  instanceB.init()
}


/**
 * @param {Element} nodeA
 * @param {Element} nodeB
 */
function nodeDidUpdate(nodeA, nodeB) {
  const instanceA = nodeA.__instance
  const instanceB = nodeB.__instance
  if(!instanceA || !instanceB) {
    return
  }
  instanceA.removeAllListeners()
  for(const [eventName, listeners] of instanceB.__handlers.entries()) {
    if(typeof listeners === 'function') {
      nodeA[eventName] = nodeB[eventName]
      nodeB[eventName] = null
      continue
    }
    for(const listener of listeners.values()) {
      nodeA.addEventListener(eventName, listener, listener.__options)
      listener.__target.removeEventListener(eventName, listener, {
        capture : listener.__options.capture,
      })
      listener.__target = nodeA
    }
  }
}

/**
 * @param {Element} nodeA
 * @param {Element} nodeB
 */
function childrenWillUpdate(nodeA, nodeB) {
  const instanceA = nodeA.__instance
  const instanceB = nodeB.__instance
  if(!instanceA || !instanceB) {
    return
  }
  if(instanceA.constructor === instanceB.constructor) {
    return false
  }
}

/**
 * @param {Element} nodeA
 * @param {Element} nodeB
 */
function childrenDidUpdate(nodeA, nodeB) {
  const instanceA = nodeA.__instance
  const instanceB = nodeB.__instance
  if(!instanceA || !instanceB) {
    return
  }
  instanceB.node = nodeA
  instanceA.node = null
  nodeA.__instance = instanceB
  nodeB.__instance = null
  if(instanceA.constructor === instanceB.constructor) {
    instanceB.componentDidUpdate(instanceA.props, instanceB.state)
  }
  else instanceB.componentDidMount()
}

/**
 * @param {ChildNode|Element} nodeA
 */
function nodeWillUnmount(nodeA) {
  nodeA.__instance?.destroy(true)
}

DomNode.defineEvents(Object.keys(events))

Object.defineProperty(DomNode.prototype, 'key', {
  writable : true,
  value : null,
})

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = DomNode
