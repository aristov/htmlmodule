const { Comment, CustomEvent, HTMLElement, document } = require('xwindow')
const EventType = require('./EventType')
const TextType = require('./TextType')

const { indexOf } = Array.prototype
const childFilterSet = new Set([undefined, null, false])
const nullNode = document.createElement('div')
const sampleNode = document.createElement('div')
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
const descriptors = {
  __inited : {
    writable : true,
    value : false,
  },
  __handlers : {
    writable : true,
    value : null,
  },
  __node : {
    writable : true,
    value : null,
  },
  __parent : {
    writable : true,
    value : false,
  },
  props : {
    writable : true,
    value : null,
  },
  state : {
    configurable : true,
    writable : true,
    value : null,
  },
  node : {
    writable : true,
    value : null,
  },
  children : {
    writable : true,
    value : undefined,
  },
  parent : {
    writable : true,
    value : undefined,
  },
  key : {
    writable : true,
    value : null,
  },
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
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    if(props.children === undefined) {
      props.children = null
    }
    Object.defineProperties(this, descriptors)
    this.props = props
    this.state = {}
    if(props.hasOwnProperty('key')) {
      this.key = props.key
    }
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
      if(!child.props) {
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
      if(!child.props) {
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
    if(!context.__handlers) {
      context.__handlers = new Map
    }
    let listeners = context.__handlers.get(eventName)
    if(!listeners) {
      context.__handlers.set(eventName, listeners = new Map)
    }
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
    if(!context.__handlers) {
      return
    }
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
    if(!this.__handlers) {
      return
    }
    let eventName, listeners, listener
    for([eventName, listeners] of this.__handlers.entries()) {
      this.__handlers.delete(eventName)
      if(typeof listeners === 'function') {
        this.node[eventName] = null
        continue
      }
      for(listener of listeners.values()) {
        listener.__target.removeEventListener(eventName, listener, {
          capture : listener.__options.capture,
        })
      }
      listeners.clear()
    }
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  _init(node, parentNode) {
    if(this.node) {
      return
    }
    this.node = node || this.createNode()
    this.node.__instance = this
    this.init()
    this._setProps()
    if(!node) {
      parentNode?.append(this.node)
    }
    const children = this.render()
    if(this.parent instanceof ElemType) {
      if(node && parentNode) {
        this.node = this.createNode()
        this.node.__instance = this
        this.children?.forEach(child => child._destroy())
        this.children = []
        this.init()
        this._setProps()
        this.parent._init()
        node.replaceWith(this.parent.__node || this.parent.node)
      }
      else this.parent._init()
      this.__node = this.parent.node
    }
    else if(this.parent !== undefined) {
      this.__node = new Comment(this.constructor.name)
      this.node.parentNode && this.node.replaceWith(this.__node)
      this.parent?.append(this.node)
    }
    if(this.parent !== null) {
      this._setChildren(children)
    }
    this.__inited = true
    node && mount(this)
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
      sampleNode.removeAttribute('class')
    }
    else sampleNode.className = className
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
      sampleNode.className = Array.from(items).filter(Boolean).join(' ')
    }
    else sampleNode.removeAttribute('class')
  }

  /**
   * @private
   */
  _updateClassName() {
    const className = sampleNode.getAttribute('class')
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
    const childrenB = []
    if(children === undefined) {
      this.children = childrenB
      return
    }
    let child
    for(child of [children].flat(Infinity)) {
      if(!childFilterSet.has(child)) {
        childrenB.push(child.props ? child : new TextType(child))
      }
    }
    const node = this.node
    const childrenA = this.children
    if(!childrenA) {
      for(child of childrenB) {
        child._init()
        node.append(child._getAnchorNode(this) || child.node)
      }
      this.children = childrenB
      return
    }
    const indexA = {}
    const indexB = {}
    let childA, key
    for(childA of childrenA) {
      key = childA?.key ?? null
      if(key === null) {
        this._setChildNodes(childrenB)
        return
      }
      indexA[key] = childA
    }
    let childB
    for(childB of childrenB) {
      key = childB.key ?? null
      if(key === null) {
        this._setChildNodes(childrenB)
        return
      }
      indexB[key] = childB
    }
    const childNodes = node.childNodes
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
      childA._updateElem(childB)
      if(childA.constructor === childB.constructor) {
        childrenB[i] = childA
      }
    }
    this.children = childrenB
  }

  _getAnchorNode(context = null) {
    if(this.parent === undefined) {
      return null
    }
    if(this.parent === null || !this.parent.props || this.parent === context) {
      return this.__node
    }
    return this.parent._getAnchorNode(context) || this.__node
  }

  /**
   * @param {[]} childrenB
   * @private
   */
  _setChildNodes(childrenB) {
    const childrenA = this.children || []
    const length = Math.max(childrenA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      childA = childrenA[i]
      childB = childrenB[i]
      if(childA === undefined) {
        childB._init()
        this.node.append(childB.__node || childB.node)
        mount(childB)
        continue
      }
      if(childB === undefined) {
        childA._destroy()
        continue
      }
      if(!childA.props && !childB.props) {
        if(childA.node.data !== childB.data) {
          childA.node.data = childB.data
        }
        childrenB[i] = childA
        continue
      }
      if(childA.props && childB.props) {
        if(childA.tagName === childB.tagName && childA.key === childB.key) {
          childA._updateElem(childB)
          if(childA.constructor === childB.constructor) {
            childrenB[i] = childA
          }
          continue
        }
      }
      nodeA = childA.__node || childA.node
      childA._destroy(true)
      childB._init()
      nodeA.replaceWith(childB.__node || childB.node)
      mount(childB)
    }
    this.children = childrenB
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  _updateElem(elem) {
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
    let attr
    for(attr of Array.from(node.attributes)) {
      node.removeAttribute(attr.name)
    }
    this._destroyParents()
    elem.children = this.children
    elem._init(node, node.parentNode)
  }

  _destroyParents() {
    const elems = [this]
    let parent = this
    while(parent = parent.parent) {
      parent.props && elems.push(parent)
    }
    let elem
    for(elem of elems.reverse()) {
      elem.destroy()
      elem.removeAllListeners()
      elem.__node?.replaceWith(elem.node)
      elem.node = nullNode
    }
  }

  /**
   * @private
   */
  _render() {
    if(this.__parent) {
      return
    }
    const refs = {}
    let key, item
    for(key in this) {
      item = this[key]
      if(item?.node) {
        refs[key] = item
      }
    }
    this._setParent()
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

  _setParent() {
    const parentA = this.parent
    this.parent = undefined
    const children = this.render()
    const parentB = this.parent
    if(parentB === undefined) {
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
        parentA?.props && parentA._destroy(true)
      }
      this._updateClassName()
      this._setChildren(children)
      return
    }
    if(parentB === null) {
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      else this.node.remove()
      return
    }
    if(!parentB.props) {
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      this._updateClassName()
      this._setChildren(children)
      parentB.append(this.node)
      return
    }
    if(!parentA) {
      const node = new Comment(this.constructor.name)
      this.node.replaceWith(node)
      this._updateClassName()
      this._setChildren(children)
      parentB._init()
      node.replaceWith(this.__node = parentB.node)
      return
    }
    this._updateClassName()
    this._setChildren(children)
    if(parentB.tagName === parentA.tagName) {
      this.__parent = true
      parentA._updateElem(parentB)
      this.__parent = false
      if(parentA.constructor === parentB.constructor) {
        this.parent = parentA
      }
      return
    }
    this.__node = null
    parentB._init()
    this.__node = parentB.node
    parentA.destroy(true)
    parentA.node.replaceWith(this.__node)
    mount(parentB.node)
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
        item._destroy(true)
      }
    }
    if(this.__node) {
      keepNode || this.__node.remove()
      this.__node = null
    }
    /*if(this.parent?.props) {
      this.parent._destroy(keepNode)
    }
    else */if(!keepNode || this.parent) {
      this.node.remove()
    }
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
      sampleNode.classList = classList
    }
    else if(Array.isArray(classList)) {
      sampleNode.classList.add(...classList.filter(Boolean))
    }
    else {
      let key
      for(key in classList) {
        sampleNode.classList.toggle(key, classList[key])
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
    Object.assign(sampleNode.style, style)
    const value = sampleNode.getAttribute('style')
    if(value) {
      if(value !== this.node.getAttribute('style')) {
        this.node.style = value
      }
    }
    else this.node.removeAttribute('style')
    sampleNode.style = ''
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
          if(attr === null) {
            this.node[prop] = value
            return
          }
          if(value === null) {
            this.node.removeAttribute(attr)
            return
          }
          if(typeof value === 'boolean') {
            if(value !== this.node[prop]) {
              this.node[prop] = value
            }
            return
          }
          if(value != this.node.getAttribute(attr)) {
            this.node[prop] = value
          }
        },
      })
    }
  }

  /**
   * @param {*} [props]
   * @param {ParentNode} [parentNode]
   * @return {*|ElemType}
   */
  static render(props, parentNode) {
    const elem = new this(props)
    const node = elem.props.node
    if(node?.hasChildNodes()) {
      node.innerHTML = ''
    }
    elem._init(node, parentNode)
    node || mount(elem)
    return elem
  }
}

/**
 * @param {ElemType} item
 */
function mount(item) {
  if(item.props && !item.parent) {
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
        if(!this.__handlers) {
          this.__handlers = new Map
        }
        this.node[name] = e => callback.call(this, e, e.target.__instance)
        this.__handlers.set(name, callback)
        return
      }
      if(this.__handlers) {
        this.node[name] = null
        this.__handlers.delete(name)
      }
    },
    get() {
      return this.__handlers?.get(name) || null
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
