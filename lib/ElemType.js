const window = require('xwindow')
const events = require('./events')

const { CustomEvent, DocumentFragment, Node, document } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @abstract
 */
class ElemType
{
  state = {}

  className = undefined

  static localName = undefined

  static namespace = ''

  static prefix = ''

  static specialProps = {
    children : true,
    className : true,
    key : true,
    localName : true,
    node : true,
  }

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.props = props = normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    this.children = []
    this.refs = {}
    if(props.key) {
      this.key = props.key
    }
  }

  /**
   * @return {*|Element}
   */
  createNode() {
    let constructor = this.constructor
    let localName = this.props.localName || constructor.localName
    const namespace = constructor.namespace
    if(localName) {
      return document.createElementNS(namespace, localName)
    }
    const prefix = constructor.prefix
    do if(constructor.name?.startsWith(prefix)) {
      const name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    throw Error(`Unable to resolve localName for "${ prefix }" prefix`)
  }

  setClassName() {
    if(this.props.className !== undefined) {
      this.className = this.props.className
    }
    if(this.className !== undefined) {
      if(this.className !== null) {
        this.node.className = this.className
      }
      return
    }
    let constructor = this.constructor
    const prefix = constructor.prefix
    const classList = this.node.classList
    do {
      if(constructor.name.startsWith(prefix)) {
        return
      }
      classList.add(constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.get]
   * @param {function} [attr.has]
   * @param {*|null} [attr.defaultValue]
   * @returns {string|*|null}
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.get(this)
    }
    return this.node.getAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(typeof attr === 'function') {
      value === null || attr.set(this, value)
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * Get all attributes of the element as an array
   * @returns {{}}
   */
  get attrs() {
    const attrs = {}
    for(const { name, value } of this.node.attributes) {
      attrs[name] = value
    }
    return attrs
  }

  /**
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      if(value === null) {
        this.node.removeAttribute(name)
      }
      else this.node.setAttribute(name, value)
    }
  }

  /**
   * @return {string[]}
   */
  get class() {
    return this.node.className.split(' ')
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set class(value) {
    if(Array.isArray(value)) {
      this.node.classList.add(...value.filter(Boolean))
    }
    else if(value.constructor === Object) {
      for(const token of Object.keys(value)) {
        this.node.classList.toggle(token, value[token])
      }
    }
    else this.node.classList = value
  }

  /**
   * @returns {DOMStringMap}
   */
  get dataset() {
    return this.node.dataset
  }

  /**
   * @param {{}} dataset
   */
  set dataset(dataset) {
    const map = this.node.dataset
    for(const [name, value] of Object.entries(dataset)) {
      if(value === null) {
        delete map[name]
      }
      else map[name] = value
    }
  }

  /**
   * @return {string}
   */
  get innerHTML() {
    return this.node.innerHTML
  }

  /**
   * @param {string|null} innerHTML
   */
  set innerHTML(innerHTML) {
    this.node.innerHTML = innerHTML
  }

  /**
   * @returns {CSSStyleDeclaration}
   */
  get style() {
    return this.node.style
  }

  /**
   * @param {{}|string|null} style
   */
  set style(style) {
    if(style === null) {
      this.node.removeAttribute('style')
      return
    }
    if(typeof style === 'string') {
      this.node.style = style
    }
    else {
      Object.assign(this.node.style, style)
    }
    if(this.node.getAttribute('style') === '') {
      this.node.removeAttribute('style')
    }
  }

  /**
   * @param {string[]|(constructor[] @link AttrType)} attrs
   */
  static defineAttrs(attrs) {
    for(const attr of attrs) {
      const name = typeof attr === 'string' ? attr : attr.attrName
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        get() {
          return this.getAttr(attr)
        },
        set(value) {
          this.setAttr(attr, value)
        },
      })
    }
  }

  /**
   * @param {boolean} [deep]
   * @returns {this}
   */
  init(deep) {
    this.setClassName()
    this.children = normalizeChildren(this.render())
    this.node.append(...this.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
    this.setProps()
  }

  setProps() {
    const specialProps = this.constructor.specialProps
    let name, value
    for(name in this.props) {
      value = this.props[name]
      if(specialProps[name] || value === undefined) {
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
    this.setChildren({ node, children })
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
    this.setHandlers(elem)
    this.setChildren(elem)
    elem.node = nodeA
    this.node = null
    nodeA.__instance = elem
    nodeB.__instance = null
    elem.componentDidMount()
  }

  setHandlers(elem) {
    const nodeA = this.node
    const nodeB = elem.node
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
    const indexA = getKeyIndex(this)
    const indexB = getKeyIndex(elem)
    if(!indexA || !indexB) {
      this.setChildNodes(elem)
      return
    }
    const childrenA = this.children.slice()
    const childrenB = elem.children.slice()
    let childA, childB, nextA, i, j
    for(i = 0; i < childrenA.length; i++) {
      childA = childrenA[i]
      if(!indexB[childA.key]) {
        childA.destroy()
        this.children.splice(this.children.indexOf(childA), 1)
      }
    }
    for(i = 0; i < childrenB.length; i++) {
      childB = childrenB[i]
      if(indexA[childB.key]) {
        continue
      }
      nextA = this.children[i]
      childB.init(true)
      if(nextA) {
        nextA.node.before(childB.node)
        this.children.splice(this.children.indexOf(nextA), 0, childB)
      }
      else {
        this.node.append(childB.node)
        this.children.push(childB)
      }
      componentDidMount(childB)
    }
    for(i = 0; i < childrenB.length; i++) {
      childB = childrenB[i]
      childA = indexA[childB.key]
      if(!childA) {
        continue
      }
      j = this.children.indexOf(childA)
      if(i === j) {
        childA.updateNode(childB)
        continue
      }
      nextA = this.children[i + 1]
      if(nextA) {
        if(childA !== nextA && this.children[j + 1] !== nextA) {
          nextA.node.before(childA.node)
          this.children.splice(j, 1)
          this.children.splice(this.children.indexOf(nextA), 0, childA)
        }
      }
      else {
        this.node.append(childA.node)
        this.children.splice(j, 1)
        this.children.push(childA)
      }
      childA.updateNode(childB)
    }
  }

  setChildNodes(elem) {
    const childrenA = this.children.slice()
    const childrenB = elem.children.slice()
    const childNodesA = Array.from(this.node.childNodes)
    const length = Math.max(childrenA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      childA = childrenA[i]
      childB = childrenB[i]
      nodeA = childNodesA[i]
      if(childA === undefined) {
        childB.init?.(true)
        this.node.append(childB.node || childB)
        this.children.push(childB)
        componentDidMount(childB)
        continue
      }
      if(childB === undefined) {
        childA.destroy?.(true)
        nodeA.remove()
        this.children.splice(this.children.indexOf(childA), 1)
        continue
      }
      if(typeof childA === 'string' && typeof childB === 'string') {
        if(childA !== childB) {
          nodeA.data = childB
          this.children[i] = childB
        }
        continue
      }
      if(childA.node && childB.node) {
        if(nodeA.tagName === childB.node.tagName && childA.key === childB.key) {
          nodeA.__instance.updateNode(childB)
          if(childA.constructor !== childB.constructor) {
            this.children[i] = childB
          }
          continue
        }
      }
      childA.destroy?.(true)
      childB.init?.(true)
      nodeA.replaceWith(childB.node || childB)
      this.children[i] = childB
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
   * @param {{context,capture,once,passive}|boolean|ElemType|*} [options]
   * @param {ElemType} [options.context=this]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   */
  on(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof ElemType) {
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
   * @param {{context,capture}|boolean|ElemType|*} [options]
   * @param {ElemType} [options.context=this]
   * @param {boolean} [options.capture=false]
   */
  off(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof ElemType) {
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
          if(value === null) {
            const attr = name === 'htmlFor' ? 'for' : name.toLowerCase()
            this.node.removeAttribute(attr)
          }
          else this.node[name] = value
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  /**
   * @param {{}} [props]
   * @param {ParentNode} [parentNode]
   * @return {*|ElemType}
   */
  static render(props, parentNode) {
    const instance = new this(props = normalizeProps(props))
    if(!parentNode) {
      instance.init(true)
      props.node && componentDidMount(instance)
      return instance
    }
    instance.init(true)
    parentNode.append(instance.node)
    componentDidMount(instance)
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
 * @return {(*|ElemType|string)[]}
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
 * @param {ElemType} elem
 * @return {{}|null}
 */
function getKeyIndex(elem) {
  const index = {}
  let child, key
  for(child of elem.children) {
    if(!child.node) {
      return null
    }
    key = child.key
    if(!key) {
      return null
    }
    index[key] = child
  }
  return index
}

/**
 * @param {ElemType} item
 */
function componentDidMount(item) {
  if(!item.node) {
    return
  }
  item.componentDidMount()
  for(const child of item.children) {
    componentDidMount(child)
  }
}

ElemType.defineEvents(Object.keys(events))

ElemType.defineMethods([
  'scrollTo',
  'scrollBy',
])

ElemType.defineProps([
  'classList',
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

ElemType.defineProps([
  'id',
], true)

Object.defineProperty(ElemType.prototype, 'key', {
  writable : true,
  value : null,
})

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = ElemType
