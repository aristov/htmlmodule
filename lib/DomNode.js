const window = require('xwindow')
const actualize = require('actualize')
const events = require('./events')
const {
  getKey,
  nodeWillMount,
  nodeDidMount,
  nodeWillUpdate,
  nodeDidUpdate,
  childrenDidUpdate,
  nodeWillUnmount,
} = require('./options')

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
    this.props = props = this.normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    if(props.key) {
      this.key = props.key
    }
  }

  /**
   * @param {*} [props]
   * @return {{}}
   */
  normalizeProps(props) {
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    else if(!props.children) {
      props.children = []
    }
    return props
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
    this.setProps()
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
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
   * @param {*} [children]
   * @return {(*|DomNode|string)[]}
   */
  normalizeChildren(children) {
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
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    const fragment = new DocumentFragment
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.props.children = this.normalizeChildren(this.render())
    fragment.append(...this.props.children.map(child => child.node || child))
    actualize(this.node, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
      nodeWillUpdate,
      nodeDidUpdate,
      childrenDidUpdate,
      nodeWillUnmount,
    })
    this.componentDidUpdate(this.props, prevState)
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
    for(const child of this.props.children) {
      child.node && child.destroy(true)
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
    const instance = new this(props = this.prototype.normalizeProps(props))
    if(!parentNode) {
      instance.init(true)
      props.node && componentDidMount(instance)
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
 * @param {DomElem|string} instance
 */
function componentDidMount(instance) {
  if(instance.node) {
    instance.componentDidMount()
    instance.props.children.forEach(componentDidMount)
  }
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
