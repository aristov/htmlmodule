const window = require('xwindow')
const EventType = require('./EventType')

const { indexOf, map } = Array.prototype
const { CustomEvent, HTMLElement, document } = window
const childFilterSet = new Set([undefined, null, false])
const nullNode = document.createElement('div')
const styleNode = document.createElement('div')
const classNode = document.createElement('div')
const specialProps = {
  children : true,
  class : true,
  classList : true,
  className : true,
  key : true,
  node : true,
  role : true,
  tagName : true,
}

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class ElemType
{
  static tagName = 'DIV'

  static role = undefined

  static class = undefined

  static className = undefined

  static specialProps = specialProps

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    if(props.constructor !== Object) {
      props = { children : props }
    }
    if(props.children === undefined) {
      props.children = null
    }
    Object.defineProperties(this, {
      __inited : {
        writable : true,
        value : false,
      },
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
   * @protected
   */
  createNode() {
    return document.createElement(this.props.tagName || this.constructor.tagName)
  }

  /**
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @return {*}
   * @abstract
   */
  render() {
    return this.props.children
  }

  /**
   * @abstract
   */
  mount() {
    void null
  }

  /**
   * @param {{}} prevProps
   * @param {{}} prevState
   * @abstract
   */
  update(prevProps, prevState) {
    void null
  }

  /**
   * @abstract
   */
  destroy() {
    void null
  }

  /**
   * @param {constructor @link AttrType|string} attr
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
   * @param {constructor @link AttrType|string} attr
   * @param {string} [attr.nodeName]
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(value === null) {
      this.node.removeAttribute(attr.nodeName || attr)
    }
    else if(typeof attr === 'function') {
      attr.set(this, value)
    }
    else if(value !== this.node.getAttribute(attr)) {
      this.node.setAttribute(attr, value)
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
    this._setClassName(this.props)
    this._render()
    this.update(this.props, prevState)
  }

  /**
   * @param {constructor @link ElemType} type
   * @return {null|ElemType|*}
   */
  find(type) {
    if(!this.children) {
      return null
    }
    let child
    for(child of this.children) {
      if(typeof child === 'string') {
        continue
      }
      if(child instanceof type) {
        return child
      }
      if(child = child.find(type)) {
        return child
      }
    }
    return null
  }

  /**
   * @param {constructor @link ElemType} type
   * @return {(null|ElemType|*)[]}
   */
  findAll(type) {
    const result = []
    if(!this.children) {
      return result
    }
    let child
    for(child of this.children) {
      if(typeof child === 'string') {
        continue
      }
      if(child instanceof type) {
        result.push(child)
      }
      result.push(...child.findAll(type))
    }
    return result
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
      const description = EventType[event] || [CustomEvent]
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

  /**
   * @public
   */
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
    this.__handlers.clear()
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * @param {Element} [node]
   * @private
   */
  _init(node) {
    this.node = node || this.createNode()
    this.node.__instance = this
    this.init()
    this._setProps()
    const children = this.render()
    if(this.__inited) {
      this._updateClassName()
    }
    this._setChildren(children)
    this.__inited = true
    node && this.mount()
  }

  /**
   * @param {{}} [props]
   * @private
   */
  _setProps(props) {
    const specialProps = this.constructor.specialProps
    let name
    if(props) {
      for(name in this.props) {
        if(!specialProps[name] && !props.hasOwnProperty(name)) {
          this[name] = null
        }
      }
    }
    else props = this.props
    this._setRoleAttr(props)
    this._setClassName(props)
    for(name in props) {
      if(!specialProps[name] && name in this) {
        this[name] = props[name]
      }
    }
    this.props = props
  }

  /**
   * @param {{}} props
   * @private
   */
  _setRoleAttr(props) {
    let role = props.role
    if(role === undefined) {
      role = this.constructor.role
    }
    if(!role) {
      this.node.removeAttribute('role')
    }
    else if(role !== this.node.getAttribute('role')) {
      this.node.setAttribute('role', role)
    }
  }

  /**
   * @param {{}} props
   * @private
   */
  _setClassName(props) {
    let className = props.className
    if(className === undefined) {
      className = this.constructor.className
    }
    if(className === undefined) {
      this._setClass(props)
    }
    else if(className === null) {
      classNode.removeAttribute('class')
    }
    else classNode.className = className
    if(props.hasOwnProperty('classList')) {
      this.classList = props.classList
    }
    else if(!this.__inited) {
      this._updateClassName()
    }
  }

  /**
   * @param {{}} props
   * @private
   */
  _setClass(props) {
    const items = new Set
    let constructor = this.constructor
    let name
    do {
      name = constructor.hasOwnProperty('class') && constructor.class
      if(name === undefined) {
        break
      }
      if(constructor === this.constructor && props.hasOwnProperty('class')) {
        name = props.class
      }
      if(name === null) {
        continue
      }
      items.add(name || constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
    if(items.size) {
      classNode.className = Array.from(items).filter(Boolean).join(' ')
    }
    else classNode.removeAttribute('class')
  }

  _updateClassName() {
    const className = classNode.getAttribute('class')
    if(className !== this.node.getAttribute('class')) {
      this.className = className
    }
  }

  /**
   * @param {*} children
   * @private
   */
  _setChildren(children) {
    if(this.children === null) {
      return
    }
    const childrenB = this.children = []
    if(children === undefined) {
      return
    }
    let child
    for(child of [children].flat(Infinity)) {
      if(!childFilterSet.has(child)) {
        childrenB.push(typeof child === 'number' ? String(child) : child)
      }
    }
    const node = this.node
    const childNodes = node.childNodes
    if(!childNodes.length) {
      for(child of childrenB) {
        if(child.props) {
          child._init()
          node.append(child.node)
          mount(child)
        }
        else node.append(child)
      }
      return
    }
    const indexA = {}
    const indexB = {}
    let nodeA, childA, key
    for(nodeA of childNodes) {
      childA = nodeA.__instance
      key = childA?.key ?? null
      if(key === null) {
        this._setChildNodes()
        return
      }
      indexA[key] = childA
    }
    let childB
    for(childB of childrenB) {
      key = childB.key ?? null
      if(key === null) {
        this._setChildNodes()
        return
      }
      indexB[key] = childB
    }
    const childrenA = map.call(childNodes, node => node.__instance)
    const length = childrenB.length
    let nextA, i, j
    for(childA of childrenA) {
      indexB[childA.key] || childA._destroy()
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      if(indexA[childB.key]) {
        continue
      }
      nextA = childNodes[i]
      childB._init()
      if(nextA) {
        nextA.before(childB.node)
      }
      else {
        node.append(childB.node)
      }
      mount(childB)
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      childA = indexA[childB.key]
      if(!childA) {
        continue
      }
      j = indexOf.call(childNodes, childA.node)
      if(i !== j) {
        nextA = childNodes[i].nextSibling
        if(nextA) {
          if(childA.node !== nextA && childA.node.nextSibling !== nextA) {
            nextA.before(childA.node)
          }
        }
        else {
          node.append(childA.node)
        }
      }
      childA._udpateElem(childB)
      if(childA.constructor === childB.constructor) {
        childrenB[i] = childA
      }
    }
  }

  /**
   * @private
   */
  _setChildNodes() {
    const childNodes = Array.from(this.node.childNodes)
    const children = this.children
    const length = Math.max(childNodes.length, children.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      nodeA = childNodes[i]
      childB = children[i]
      if(nodeA === undefined) {
        childB._init?.()
        this.node.append(childB.node || childB)
        mount(childB)
        continue
      }
      childA = nodeA.__instance || nodeA.data || {}
      if(childB === undefined) {
        if(childA.node) {
          childA._destroy()
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
        if(nodeA.tagName === childB.tagName.toUpperCase() && childA.key === childB.key) {
          childA._udpateElem(childB)
          if(childA.constructor === childB.constructor) {
            children[i] = childA
          }
          continue
        }
      }
      childA._destroy?.(true)
      childB._init?.()
      nodeA.replaceWith(childB.node || childB)
      mount(childB)
    }
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  _udpateElem(elem) {
    if(this.constructor !== elem.constructor) {
      this._replaceElem(elem)
      return
    }
    const prevProps = this.props
    this._setProps(elem.props)
    this._render()
    this.update(prevProps, this.state)
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  _replaceElem(elem) {
    const node = this.node
    this.destroy()
    this.removeAllListeners()
    for(const attr of Array.from(node.attributes)) {
      node.removeAttribute(attr.name)
    }
    this.node = nullNode
    elem._init(node)
  }

  /**
   * @private
   */
  _render() {
    const refs = {}
    let key, item
    for(key in this) {
      item = this[key]
      if(item?.node) {
        refs[key] = item
      }
    }
    const children = this.render()
    this._updateClassName()
    this._setChildren(children)
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

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  _destroy(keepNode = false) {
    this.destroy()
    this.removeAllListeners()
    if(this.children) {
      let item
      for(item of this.children) {
        item._destroy?.(true)
      }
    }
    keepNode || this.node.remove()
    delete this.node.__instance
    this.node = nullNode
  }

  /**
   * @returns {NamedNodeMap}
   */
  get attributes() {
    return this.node.attributes
  }

  /**
   * @param {{}|null} attributes
   */
  set attributes(attributes) {
    let name, value
    if(this.props.attributes) {
      for(name in this.props.attributes) {
        if(!attributes?.hasOwnProperty(name)) {
          this.node.removeAttribute(name)
        }
      }
    }
    this.props.attributes = attributes
    if(!attributes) {
      return
    }
    for(name in attributes) {
      value = attributes[name]
      if(value === null) {
        this.node.removeAttribute(name)
      }
      else if(value !== this.node.getAttribute(name)) {
        this.node.setAttribute(name, value)
      }
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get classList() {
    return this.node.classList
  }

  /**
   * @param {*} classList {string|string[]|{}|null}
   */
  set classList(classList) {
    if(classList === null) {
      void null
    }
    else if(typeof classList === 'string') {
      classNode.classList = classList
    }
    else if(Array.isArray(classList)) {
      classNode.classList.add(...classList.filter(Boolean))
    }
    else {
      let key
      for(key in classList) {
        classNode.classList.toggle(key, classList[key])
      }
    }
    if(!this.__inited) {
      this._updateClassName()
    }
  }

  /**
   * @returns {DOMStringMap}
   */
  get dataset() {
    return this.node.dataset
  }

  /**
   * @param {{}|null} dataset
   */
  set dataset(dataset) {
    let name, value
    for(name in Object.assign({}, this.node.dataset)) {
      if(!dataset?.hasOwnProperty(name)) {
        delete this.node.dataset[name]
      }
    }
    if(!dataset) {
      return
    }
    for(name in dataset) {
      value = dataset[name]
      if(value === null) {
        delete this.node.dataset[name]
      }
      else if(value !== this.node.dataset[name]) {
        this.node.dataset[name] = value
      }
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
    this.children = null
    if(innerHTML !== this.node.innerHTML) {
      this.node.innerHTML = innerHTML
    }
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
      return
    }
    Object.assign(styleNode.style, style)
    const value = styleNode.getAttribute('style')
    if(value) {
      if(value !== this.node.getAttribute('style')) {
        this.node.style = value
      }
    }
    else this.node.removeAttribute('style')
    styleNode.style = ''
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.node?.tagName || this.props.tagName || this.constructor.tagName
  }

  /**
   * @param {string[]|(constructor[] @link AttrType)} attrs
   */
  static defineAttrs(attrs) {
    for(const attr of attrs) {
      const name = attr.propName || attr
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
   * @param {{}} props
   */
  static defineProps(props) {
    for(const prop in props) {
      const attr = props[prop]
      Object.defineProperty(this.prototype, prop, {
        configurable : true,
        get() {
          return this.node[prop]
        },
        set(value) {
          if(value === null && attr !== null) {
            this.node.removeAttribute(attr)
          }
          else if(value !== this.node[prop]) {
            this.node[prop] = value
          }
        },
      })
    }
  }

  /**
   * @param {{}} [props]
   * @param {ParentNode} [parentNode]
   * @return {*|ElemType}
   */
  static render(props, parentNode) {
    const elem = new this(props)
    const node = elem.props.node
    elem._init(node)
    parentNode?.append(elem.node)
    node || elem.mount()
    return elem
  }
}

/**
 * @param {ElemType} item
 */
function mount(item) {
  if(item.node) {
    item.children?.forEach(mount)
    item.mount()
  }
}

for(const type in EventType) {
  const name = 'on' + type
  if(!(name in HTMLElement.prototype)) {
    continue
  }
  Object.defineProperty(ElemType.prototype, name, {
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

ElemType.defineMethods([
  'scrollBy',
  'scrollTo',
])

ElemType.defineProps({
  className : 'class',
  id : 'id',
})

module.exports = ElemType
