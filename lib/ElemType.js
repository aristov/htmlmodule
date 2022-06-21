const window = require('xwindow')
const events = require('./events')

const { indexOf, map } = Array.prototype
const { CustomEvent, Node, document } = window
const AttrNameMap = {
  htmlFor : 'for',
  defaultValue : 'value',
  defaultChecked : 'checked',
  defaultSelected : 'selected',
  value : null,
  checked : null,
  selected : null,
  indeterminate : null,
}

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 * @abstract
 */
class ElemType
{
  static tagName = undefined

  static prefix = undefined

  static class = undefined

  static specialProps = {
    children : true,
    class : true,
    className : true,
    key : true,
    node : true,
    tagName : true,
  }

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    if(props.constructor !== Object) {
      props = { children : props }
    }
    Object.defineProperties(this, {
      __handlers : {
        value : new Map,
      },
      props : {
        writable : true,
        value : props,
      },
      state : {
        configurable : true,
        value : {},
      },
      node : {
        writable : true,
        value : null,
      },
      children : {
        writable : true,
        value : null,
      },
      className : {
        configurable : true,
        writable : true,
        value : undefined,
      },
      key : {
        writable : true,
        value : props.key ?? null,
      },
    })
  }

  /**
   * @return {*|Element}
   */
  createNode() {
    return document.createElement(this.props.tagName || this.constructor.tagName)
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
    const items = new Set
    let name
    do {
      if(constructor === ElemType) {
        break
      }
      name = constructor === this.constructor && this.props.hasOwnProperty('class') ?
        this.props.class :
        constructor.hasOwnProperty('class') && constructor.class
      if(name === null) {
        continue
      }
      name ||= constructor.name
      if(!name) {
        break
      }
      if(prefix && name.startsWith(prefix)) {
        break
      }
      name && items.add(name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
    if(items.size) {
      this.node.className = Array.from(items).join(' ')
    }
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

  init() {
    this.node = this.props.node || this.createNode()
    this.node.__instance = this
    this.setClassName()
    this.setProps()
    this.children = normalizeChildren(this.render())
    this.node.append(...this.children.map(child => {
      if(child.props) {
        child.init()
        return child.node
      }
      return child
    }))
  }

  setProps() {
    const specialProps = this.constructor.specialProps
    let name
    for(name in this.props) {
      if(specialProps[name]) {
        continue
      }
      if(name in this) {
        this[name] = this.props[name]
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
    const refs = {}
    let key, item
    for(key in this) {
      item = this[key]
      if(item?.node) {
        refs[key] = item
      }
    }
    this.children = normalizeChildren(this.render())
    this.setChildren()
    for(key in refs) {
      item = refs[key]
      if(this.node.contains(item.node)) {
        this[key] = item
      }
      if(!this.node.contains(this[key].node)) {
        delete this[key]
      }
    }
  }

  udpateElem(elem) {
    if(this.constructor !== elem.constructor) {
      this.replaceElem(elem)
      return
    }
    const specialProps = this.constructor.specialProps
    const prevProps = Object.assign({}, this.props)
    const props = Object.assign({}, elem.props)
    let name
    for(name in prevProps) {
      if(!specialProps[name]) {
        if(props.hasOwnProperty(name)) {
          this[name] = props[name]
        }
        else this[name] = null
      }
      delete props[name]
    }
    Object.assign(this, props)
    this.props = elem.props
    this._render()
    this.componentDidUpdate(prevProps, this.state)
  }

  replaceElem(elem) {
    const node = this.node
    this.componentWillUnmount()
    this.removeAllListeners()
    for(const attr of Array.from(node.attributes)) {
      node.removeAttribute(attr.name)
    }
    this.node = node.cloneNode()
    node.__instance = elem
    elem.node = node
    elem.setClassName()
    elem.setProps()
    elem.children = normalizeChildren(elem.render())
    elem.setChildren()
    elem.componentDidMount()
  }

  setChildren() {
    const indexA = {}
    const indexB = {}
    let node, child, key
    for(node of this.node.childNodes) {
      child = node.__instance
      key = child?.key
      if(!key) {
        this.setChildNodes()
        return
      }
      indexA[key] = child
    }
    for(child of this.children) {
      key = child.key
      if(!key) {
        this.setChildNodes()
        return
      }
      indexB[key] = child
    }
    const childrenA = map.call(this.node.children, node => node.__instance)
    const childrenB = this.children
    let childA, childB, nextA, i, j
    for(i = 0; i < childrenA.length; i++) {
      childA = childrenA[i]
      if(!indexB[childA.key]) {
        childA.destroy()
      }
    }
    for(i = 0; i < childrenB.length; i++) {
      childB = childrenB[i]
      if(indexA[childB.key]) {
        continue
      }
      nextA = this.node.children[i]
      childB.init()
      if(nextA) {
        nextA.before(childB.node)
      }
      else {
        this.node.append(childB.node)
      }
      componentDidMount(childB)
    }
    for(i = 0; i < childrenB.length; i++) {
      childB = childrenB[i]
      childA = indexA[childB.key]
      if(!childA) {
        continue
      }
      j = indexOf.call(this.node.children, childA.node)
      if(i === j) {
        childA.udpateElem(childB)
        continue
      }
      nextA = this.node.children[i].nextSibling
      if(nextA) {
        if(childA.node !== nextA && childA.node.nextSibling !== nextA) {
          nextA.node.before(childA.node)
        }
      }
      else {
        this.node.append(childA.node)
      }
      childA.udpateElem(childB)
    }
  }

  setChildNodes() {
    const childNodesA = Array.from(this.node.childNodes)
    const childrenB = this.children
    const length = Math.max(childNodesA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      nodeA = childNodesA[i]
      childB = childrenB[i]
      if(nodeA === undefined) {
        childB.init?.()
        this.node.append(childB.node || childB)
        componentDidMount(childB)
        continue
      }
      childA = nodeA.__instance || nodeA.data
      if(childB === undefined) {
        if(childA.node) {
          childA.destroy()
        }
        else nodeA.remove()
        continue
      }
      if(typeof childA === 'string' && typeof childB === 'string') {
        if(childA !== childB) {
          nodeA.data = childB
        }
        continue
      }
      if(childA.node && childB.props) {
        if(nodeA.tagName === childB.tagName && childA.key === childB.key) {
          childA.udpateElem(childB)
          continue
        }
      }
      childA.destroy?.(true)
      childB.init?.()
      nodeA.replaceWith(childB.node || childB)
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
   * Get all attributes of the element as an array
   * @returns {{}}
   */
  get attributes() {
    return this.node.attributes
  }

  /**
   * Set content attributes on the element
   * @param {{}} attributes
   */
  set attributes(attributes) {
    for(const [name, value] of Object.entries(attributes)) {
      if(value === null) {
        this.node.removeAttribute(name)
      }
      else this.node.setAttribute(name, value)
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get classList() {
    return this.node.classList
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set classList(value) {
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

  get tagName() {
    return this.node?.tagName || this.props.tagName || this.constructor.tagName
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
    for(const prop of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[prop]
        },
      }
      if(setters) {
        desc.set = function(value) {
          if(value === null && AttrNameMap[prop] !== null) {
            const attr = AttrNameMap[prop] || prop.toLowerCase()
            this.node.removeAttribute(attr)
          }
          else this.node[prop] = value
        }
      }
      Object.defineProperty(this.prototype, prop, desc)
    }
  }

  /**
   * @param {{}} [props]
   * @param {ParentNode} [parentNode]
   * @return {*|ElemType}
   */
  static render(props, parentNode) {
    const elem = new this(props)
    elem.init()
    parentNode?.append(elem.node)
    componentDidMount(elem)
    return elem
  }
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
 * @param {ElemType} item
 */
function componentDidMount(item) {
  if(!item.node) {
    return
  }
  item.componentDidMount()
  item.children.forEach(componentDidMount)
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

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = ElemType