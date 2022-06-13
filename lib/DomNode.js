const window = require('xwindow')
const events = require('./events')

const { indexOf } = Array.prototype
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
    const node = new DocumentFragment
    const refs = Object.assign({}, this.refs)
    const children = normalizeChildren(this.render())
    Object.assign(this.refs, refs)
    node.append(...children.map(child => child.node || child))
    this.setChildren({ node })
  }

  getKeyIndex(node) {
    const index = {}
    let child, key
    for(child of node.childNodes) {
      if(child.nodeType !== Node.ELEMENT_NODE) {
        return null
      }
      key = getKey(child)
      if(!key) {
        return null
      }
      index[key] = child
    }
    return index
  }

  updateNode(elem) {
    const nodeA = this.node
    const nodeB = elem.node
    elem.init()
    if(this.constructor === elem.constructor) {
      const props = this.props
      this.props = elem.props
      this.setAttrs(elem)
      this._render()
      this.componentDidUpdate(props, this.state)
      return
    }
    this.componentWillUnmount()
    this.setAttrs(elem)
    this.removeAllListeners()
    for(const [eventName, listeners] of elem.__handlers.entries()) {
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
    this.setChildren(elem)
    elem.node = nodeA
    this.node = null
    nodeA.__instance = elem
    nodeB.__instance = null
    elem.componentDidMount()
  }

  setAttrs(elem) {
    const nodeA = this.node
    const nodeB = elem.node
    const names = new Set
    let attr, value
    for(attr of nodeA.attributes) {
      names.add(attr.name)
      value = nodeB.getAttribute(attr.name)
      if(value === null) {
        nodeA.removeAttribute(attr.name)
        continue
      }
      if(attr.value !== value) {
        attr.value = value
      }
    }
    for(attr of nodeB.attributes) {
      if(!names.has(attr.name)) {
        nodeA.setAttribute(attr.name, attr.value)
      }
    }
    switch(nodeA.tagName) {
      case 'OPTION':
        nodeA.selected = nodeB.selected
        break
      case 'INPUT':
        nodeA.checked = nodeB.checked
        nodeA.indeterminate = nodeB.indeterminate
      case 'TEXTAREA':
        nodeA.value = nodeB.value
    }
  }

  setChildren(elem) {
    const nodeA = this.node
    const nodeB = elem.node
    const indexA = this.getKeyIndex(nodeA)
    const indexB = this.getKeyIndex(nodeB)
    if(!indexA || !indexB) {
      this.setChildNodes(elem)
      return
    }
    const childrenB = Array.from(nodeB.children)
    let childA = nodeA.firstElementChild
    let childB, nextA, i, j
    while(childA) {
      nextA = childA.nextElementSibling
      if(!indexB[getKey(childA)]) {
        childA.__instance?.destroy()
      }
      childA = nextA
    }
    for(i = 0; i < childrenB.length; i++) {
      childB = childrenB[i]
      childA = indexA[getKey(childB)]
      if(childA) {
        continue
      }
      nextA = nodeA.children[i]
      childB.__instance?.init(true)
      if(nextA) {
        nextA.before(childB)
      }
      else nodeA.append(childB)
      componentDidMount(childB)
    }
    for(i = 0; i < childrenB.length; i++) {
      childB = childrenB[i]
      childA = indexA[getKey(childB)]
      if(!childA) {
        continue
      }
      j = indexOf.call(nodeA.children, childA)
      if(i === j) {
        childA.__instance?.updateNode(childB.__instance)
        continue
      }
      nextA = nodeA.children[i].nextElementSibling
      if(nextA) {
        if(childA !== nextA && childA.nextElementSibling !== nextA) {
          nextA.before(childA)
        }
      }
      else nodeA.append(childA)
      childA.__instance?.updateNode(childB.__instance)
    }
  }

  setChildNodes(elem) {
    const nodeA = this.node
    const nodeB = elem.node
    const childNodesA = Array.from(nodeA.childNodes)
    const childNodesB = Array.from(nodeB.childNodes)
    const length = Math.max(childNodesA.length, childNodesB.length)
    let i, childA, childB
    for(i = 0; i < length; i++) {
      childA = childNodesA[i]
      childB = childNodesB[i]
      if(!childA) {
        childB.__instance?.init(true)
        nodeA.append(childB)
        componentDidMount(childB)
        continue
      }
      if(!childB) {
        childA.__instance?.destroy()
        continue
      }
      if(childA.nodeType === Node.TEXT_NODE && childB.nodeType === Node.TEXT_NODE) {
        if(childA.data !== childB.data) {
          childA.data = childB.data
        }
        continue
      }
      if(childA.nodeType === Node.ELEMENT_NODE && childB.nodeType === Node.ELEMENT_NODE) {
        if(childA.tagName === childB.tagName && getKey(childA) === getKey(childB)) {
          childA.__instance?.updateNode(childB.__instance)
          continue
        }
      }
      childA.__instance?.destroy(true)
      childB.__instance?.init(true)
      childA.replaceWith(childB)
      componentDidMount(childB)
    }
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
   * @param {ParentNode} [parentNode]
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props = normalizeProps(props))
    if(!parentNode) {
      instance.init(true)
      props.node && componentDidMount(instance.node)
      return instance
    }
    instance.init(true)
    parentNode.append(instance.node)
    componentDidMount(instance.node)
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
  if(!node.__instance) {
    return
  }
  node.__instance.componentDidMount()
  for(const child of node.children) {
    componentDidMount(child)
  }
}

/**
 * @param {Element} node
 * @return {string}
 */
function getKey(node) {
  return node.__instance?.key
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
