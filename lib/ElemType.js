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
  className : true,
  key : true,
  node : true,
  role : true,
  tagName : true,
}
const descriptors = {
  __props : {
    writable : true,
    value : null,
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
    this.__props = {}
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
    const node = document.createElement(this.props.tagName || this.constructor.tagName)
    node.__instance = this
    return node
  }

  /**
   * @protected
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @return {*}
   * @protected
   * @abstract
   */
  render() {
    return this.props.children
  }

  /**
   * @protected
   * @abstract
   */
  mount() {
    void null
  }

  /**
   * @param {{}} prevProps
   * @param {{}} prevState
   * @protected
   * @abstract
   */
  update(prevProps, prevState) {
    void null
  }

  /**
   * @protected
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
   * @protected
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.get(this)
    }
    return this.__props.attributes?.[attr] ?? null
  }

  /**
   * @param {constructor @link AttrType|string} attr
   * @param {string} [attr.nodeName]
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   * @protected
   */
  setAttr(attr, value) {
    let attributes = this.__props.attributes
    if(!attributes) {
      attributes = this.__props.attributes = {}
    }
    if(value === null) {
      delete attributes[attr.nodeName || attr]
    }
    else if(typeof attr === 'function') {
      attr.set(this, value)
    }
    else if(value !== attributes[attr]) {
      attributes[attr] = value
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
    const props = this.__props
    this.__props = {}
    this._render(props)
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
   * @param {{capture,once,passive}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   * @protected
   */
  on(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    if(!this.__handlers) {
      this.__handlers = new Map
      this.__handlers.__updates = new Map
    }
    let listeners = this.__handlers.get(eventName)
    if(!listeners) {
      this.__handlers.set(eventName, listeners = new Map)
    }
    if(listeners.has(callback)) {
      return
    }
    const listener = event => {
      options.once && listeners.delete(callback)
      callback.call(this, event, event.target.__instance)
    }
    listener.__options = options
    listeners.set(callback, listener)
    this.__handlers.__updates.set(eventName, listener)
  }

  /**
   * @param {string} eventName
   * @param {function} callback
   * @param {{capture}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @protected
   */
  off(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    if(!this.__handlers) {
      return
    }
    let listeners = this.__handlers.get(eventName)
    if(!listeners?.has(callback)) {
      return
    }
    const listener = listeners.get(callback)
    listeners.delete(callback)
    listeners.size || this.__handlers.delete(eventName)
    listener.__off = true
    this.__handlers.__updates.set(eventName, listener)
  }

  /**
   * @protected
   */
  removeAllListeners() {
    if(!this.__handlers) {
      return
    }
    let eventName, listeners, listener
    for([eventName, listeners] of this.__handlers.entries()) {
      this.__handlers.delete(eventName)
      if(typeof listeners === 'function') {
        this.__handlers.__updates.set(eventName, null)
        continue
      }
      for(listener of listeners.values()) {
        listener.__off = true
        this.__handlers.__updates.set(eventName, listener)
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
    this.init()
    this._setProps()
    const children = this.render()
    if(this.parent === undefined) {
      this.node = node || this.createNode()
      node || parentNode?.append(this.node)
      this._setNodeProps()
      this._setChildren(children)
      node && mount(this)
      return
    }
    if(this.parent === null) {
      this.node = node || this.createNode()
      node || parentNode?.append(this.node)
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
      node && mount(this)
      return
    }
    if(!this.parent.props) {
      this.node = node || this.createNode()
      this._setNodeProps()
      this._setChildren(children)
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
      this.parent.append(this.node)
      node && mount(this)
      return
    }
    this.node = !parentNode && node || this.createNode()
    if(node && parentNode) {
      this.children.forEach(child => child._destroy())
      this.children = undefined
    }
    this._setNodeProps()
    this._setChildren(children)
    this.parent._init()
    this.__node = this.parent.node
    node?.replaceWith(this.parent.__node || this.parent.node)
    node && mount(this)
  }

  /**
   * @private
   */
  _setProps() {
    const specialProps = this.constructor.specialProps
    const props = this.props
    let name
    for(name in props) {
      if(!specialProps[name] && name in this) {
        this[name] = props[name]
      }
    }
  }

  /**
   * @param {{}} prevProps
   * @private
   */
  _setNodeProps(prevProps) {
    const map = this.constructor.props
    const props = this.__props
    const specialProps = {
      classList : true,
      className : true,
    }
    let name, attr, value, attributes
    if(prevProps) {
      for(name in prevProps) {
        if(name === 'attributes') {
          attributes = this.__props.attributes || {}
          for(attr in prevProps.attributes) {
            if(!attributes.hasOwnProperty(attr)) {
              this.node.removeAttribute(attr)
            }
          }
          continue
        }
        if(name === 'dataset') {
          attributes = this.__props.dataset || {}
          for(attr in prevProps.dataset) {
            if(!attributes.hasOwnProperty(attr)) {
              delete this.node.dataset[attr]
            }
          }
          continue
        }
        if(name === 'style') {
          if(!this.__props.hasOwnProperty('style')) {
            this.node.removeAttribute('style')
          }
          continue
        }
        if(specialProps[name] || this.__props.hasOwnProperty(name)) {
          continue
        }
        attr = map[name]
        if(attr === null) {
          this.node[name] = null
        }
        else this.node.removeAttribute(attr)
      }
    }
    this._setRoleAttr()
    this._setClassName()
    for(name in this.__props) {
      if(name === 'attributes') {
        attributes = this.__props.attributes
        for(attr in attributes) {
          value = attributes[attr]
          if(value === null) {
            this.node.removeAttribute(attr)
          }
          else if(value !== this.node.getAttribute(attr)) {
            this.node.setAttribute(attr, value)
          }
        }
        continue
      }
      if(name === 'dataset') {
        attributes = this.__props.dataset
        for(attr in attributes) {
          value = attributes[attr]
          if(value === null) {
            delete this.node.dataset[attr]
          }
          else if(value !== this.node.dataset[attr]) {
            this.node.dataset[attr] = value
          }
        }
        continue
      }
      if(name === 'style') {
        if(props.style === null) {
          this.node.removeAttribute('style')
          continue
        }
        if(typeof props.style === 'string') {
          this.node.style = props.style
          continue
        }
        Object.assign(sampleNode.style, props.style)
        value = sampleNode.getAttribute('style')
        if(!value.length) {
          this.node.removeAttribute('style')
        }
        else if(value !== this.node.getAttribute('style')) {
          this.node.style = value
        }
        sampleNode.style = ''
        continue
      }
      if(specialProps[name] || !(name in this.node)) {
        continue
      }
      attr = map[name]
      value = this.__props[name]
      if(attr === null) {
        this.node[name] = value
      }
      else if(value === null) {
        this.node.removeAttribute(attr)
      }
      else if(value !== this.node[name]) {
        this.node[name] = value
      }
    }
    this._setHandlers()
  }

  /**
   * @private
   */
  _setHandlers() {
    if(!this.__handlers) {
      return
    }
    const updates = this.__handlers.__updates
    let eventName, listener, options
    for([eventName, listener] of updates.entries()) {
      options = listener?.__options
      if(!options) {
        this.node[eventName] = listener
        continue
      }
      if(listener.__off) {
        this.node.removeEventListener(eventName, listener, {
          capture : options.capture,
        })
        continue
      }
      this.node.addEventListener(eventName, listener, {
        capture : options.capture || false,
        once : options.once || false,
        passive : options.passive || false,
      })
    }
    updates.clear()
  }

  /**
   * @private
   */
  _setRoleAttr() {
    let role = this.props.role
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
   * @private
   */
  _setClassName() {
    if(this.__props.className === null) {
      this.node.removeAttribute('class')
      return
    }
    let className = this.props.className
    if(className === undefined) {
      className = this.constructor.className
    }
    if(className === undefined) {
      this._setClass()
    }
    else this._setClassList([className])
  }

  /**
   * @private
   */
  _setClass() {
    const props = this.props
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
    this._setClassList(Array.from(items))
  }

  /**
   * @param classList
   * @private
   */
  _setClassList(classList) {
    const list = this.__props.classList
    if(typeof list === 'string') {
      this.node.className = list
      return
    }
    if(!Array.isArray(list)) {
      let name
      for(name in list) {
        list[name] && classList.push(name)
      }
    }
    else classList.push(...list)
    classList = classList.filter(Boolean)
    if(!classList.length) {
      this.node.removeAttribute('class')
      return
    }
    const className = classList.join(' ')
    if(className !== this.node.className) {
      this.node.className = className
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

  /**
   * @param {ElemType} context
   * @return {null|Comment|Element}
   * @private
   */
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
    const props = this.__props
    this.__props = {}
    this.props = elem.props
    this._setProps()
    this._render(props)
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

  /**
   * @private
   */
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
  _render(props) {
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
    this._setParent(props)
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
   * @private
   */
  _setParent(props) {
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
      this._setNodeProps(props)
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
      this._setNodeProps(props)
      this._setChildren(children)
      parentB.append(this.node)
      return
    }
    if(!parentA) {
      const node = new Comment(this.constructor.name)
      this.node.replaceWith(node)
      this._setNodeProps(props)
      this._setChildren(children)
      parentB._init()
      node.replaceWith(this.__node = parentB.node)
      return
    }
    this._setNodeProps(props)
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
    else */
    if(!keepNode || this.parent) {
      this.node.remove()
    }
    delete this.node.__instance
    this.node = nullNode
  }

  /**
   * @return {string|null}
   */
  get innerHTML() {
    return this.__props.innerHTML
  }

  /**
   * @param {string|null} innerHTML
   */
  set innerHTML(innerHTML) {
    this.children = null
    this.__props.innerHTML = innerHTML
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
    this.props = props
    for(const prop in props) {
      Object.defineProperty(this.prototype, prop, {
        configurable : true,
        get() {
          return this.__props[prop]
        },
        set(value) {
          this.__props[prop] = value
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

  /**
   * @param {ElemType|TextType} item
   */
  static __mount(item) {
    if(item.props && !item.parent) {
      item.children?.forEach(mount)
      item.mount()
    }
  }
}

const mount = ElemType.__mount

for(const type in EventType) {
  const name = 'on' + type
  if(!(name in HTMLElement.prototype)) {
    continue
  }
  Object.defineProperty(ElemType.prototype, name, {
    configurable : true,
    set(callback) {
      if(callback) {
        const listener = e => callback.call(this, e, e.target.__instance)
        if(!this.__handlers) {
          this.__handlers = new Map
          this.__handlers.__updates = new Map
        }
        this.__handlers.set(name, listener)
        this.__handlers.__updates.set(name, listener)
        return
      }
      if(this.__handlers) {
        this.__handlers.delete(name)
        this.__handlers.__updates.set(name, null)
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
  attributes : null,
  classList : null,
  className : 'class',
  dataset : null,
  id : 'id',
  style : null,
})

module.exports = ElemType
