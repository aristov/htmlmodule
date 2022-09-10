const { Comment, CustomEvent, document } = require('xwindow')
const AriaType = require('./AriaType')
const AttrType = require('./AttrType')
const Attributes = require('./Attributes')
const Class = require('./Class')
const Dataset = require('./Dataset')
const EventType = require('./EventType')
const Id = require('./Id')
const PropType = require('./PropType')
const Style = require('./Style')
const TextType = require('./TextType')

const { indexOf } = Array.prototype
const skipTypes = {
  undefined : true,
  boolean : true,
}
const specialProps = {
  children : true,
  class : true,
  node : true,
  parent : true,
  tagName : true,
}
const nullDescriptor = {
  writable : true,
  value : null,
}
const descriptors = {
  __vnode : nullDescriptor,
  __node : nullDescriptor,
  __children : nullDescriptor,
  __parent : nullDescriptor,
  __index : nullDescriptor,
  __handlers : nullDescriptor,
  __sampleNode : nullDescriptor,
  vnode : nullDescriptor,
  node : nullDescriptor,
  children : nullDescriptor,
  parent : {
    writable : true,
    value : undefined,
  },
}
let init

function debug() {
  init.apply(this, arguments)
  this.node.__elem = this
}

/**
 * @abstract
 */
class ElemType
{
  static namespace = null

  static tagName = 'div'

  static role = null

  static class = null

  static className = null

  static props = {
    role : 'role',
    className : Class,
    classList : PropType,
    id : Id,
    style : Style,
    dataset : Dataset,
    attributes : Attributes,
    textContent : PropType,
    innerHTML : PropType,
    ...EventType.props,
    ...AriaType.props,
  }

  static defaultProps = null

  /**
   * @param {*} [props]
   */
  constructor(props) {
    this.constructor.__init()
    Object.defineProperties(this, descriptors)
    Object.defineProperty(this, 'props', {
      writable : true,
      value : {
        children : null,
        ...this.constructor.defaultProps,
      },
    })
    if(props?.constructor === Object) {
      Object.assign(this.props, props)
    }
    else if(props !== undefined) {
      this.props.children = props
    }
  }

  /**
   * @return {string}
   */
  toString() {
    this.__init()
    return this.node.outerHTML
  }

  /**
   * @param {{}|function} state
   */
  setState(state) {
    const prevState = { ...this.state }
    if(!this.state) {
      this.state = {}
    }
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.vnode = this.__createVNode()
    this.__assignProps()
    this.__update()
    this.update(this.props, prevState)
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function} [filter]
   * @return {null|ElemType|*}
   */
  find(type, filter) {
    let child
    for(child of this.children) {
      if(!child.props) {
        continue
      }
      if(child instanceof type) {
        if(!filter || filter(child)) {
          return child
        }
      }
      if(child = child.find(type, filter)) {
        return child
      }
    }
    return null
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function} [filter]
   * @return {(null|ElemType|*)[]}
   */
  findAll(type, filter) {
    const result = []
    let child
    for(child of this.children) {
      if(!child.props) {
        continue
      }
      if(child instanceof type) {
        if(!filter || filter(child)) {
          result.push(child)
        }
      }
      result.push(...child.findAll(type, filter))
    }
    return result
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function} [filter]
   * @return {ElemType|*|null}
   */
  closest(type, filter) {
    if(this instanceof type) {
      if(!filter || filter(this)) {
        return this
      }
    }
    return this.__parent?.closest(type, filter) || null
  }

  /**
   * @param {Element} node
   * @return {ElemType|*|null}
   */
  getElemByNode(node) {
    return node === this.node ?
      this :
      this.find(ElemType, elem => elem.node === node)
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
    if(typeof event !== 'string') {
      return this.node.dispatchEvent(event)
    }
    const desc = EventType.types[event]
    event = desc ?
      new desc.constructor(event, dict || desc.dict) :
      new CustomEvent(event, dict)
    return this.node.dispatchEvent(event)
  }

  /**
   * @public
   */
  blur() {
    this.node.blur()
  }

  /**
   * @public
   */
  click() {
    this.node.click()
  }

  /**
   * @public
   */
  focus() {
    this.node.focus()
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
    let listeners = this.__handlers.get(eventName)
    if(!listeners) {
      this.__handlers.set(eventName, listeners = new Map)
    }
    let listener = listeners.get(callback)
    if(listener) {
      listener.__on = true
      return
    }
    listener = e => {
      options.once && listeners.delete(callback)
      callback.call(this, e, this.getElemByNode(e.target))
    }
    listener.__on = true
    listener.__options = options
    listeners.set(callback, listener)
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
    const listeners = this.__handlers.get(eventName)
    const listener = listeners?.get(callback)
    if(listener) {
      listener.__on = false
    }
  }

  /**
   * @protected
   */
  removeAllListeners() {
    let listeners, listener
    for(listeners of this.__handlers.values()) {
      for(listener of listeners.values()) {
        listener.__on = false
      }
    }
  }

  /**
   * @protected
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @protected
   * @abstract
   */
  assign() {
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
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  __init(node, parentNode) {
    if(this.node) {
      return
    }
    this.__sampleNode = this.props.tagName ?
      this.__createNode() :
      this.constructor.__sampleNode
    this.__handlers = new Map
    this.vnode = this.__createVNode()
    this.state && Object.defineProperty(this, 'state', {
      enumerable : false,
      value : this.state,
    })
    this.init()
    this.__assignProps()
    this.assign()
    this.__children = this.render()
    if(this.parent === undefined) {
      this.node = node || this.__createNode()
      node || parentNode?.append(this.node)
      this.__setProps()
      this.__setChildren()
      node && this.__mount()
      return
    }
    if(this.parent === null) {
      this.node = node || this.__createNode()
      this.__node = new Comment(this.constructor.name)
      if(node?.parentNode) {
        node.replaceWith(this.__node)
      }
      else parentNode?.append(this.__node)
      this.children = []
      node && this.__mount()
      return
    }
    this.node = node || this.__createNode()
    this.__setProps()
    this.__setChildren()
    this.__node = new Comment(this.constructor.name)
    this.node.replaceWith(this.__node)
    this.parent.append(this.node)
    node && this.__mount()
  }

  /**
   * @private
   */
  __mount() {
    let child
    for(child of this.children) {
      child.props && child.__mount()
    }
    this.mount()
  }

  /**
   * @private
   */
  __assignProps() {
    const props = this.props
    let name
    for(name in props) {
      if(!specialProps[name] && name in this) {
        this[name] = props[name]
      }
    }
  }

  /**
   * @return {*|Element}
   * @private
   */
  __createNode() {
    return this.constructor.__createNode(this.props.tagName)
  }

  /**
   * @private
   * @return {{role,className,classList}}
   */
  __createVNode() {
    const vnode = {
      role : this.constructor.role,
      className : Class.generate(this.constructor),
    }
    Object.defineProperty(vnode, 'classList', nullDescriptor)
    return vnode
  }

  /**
   * @private
   */
  __setProps() {
    this.__setHandlers()
    if(this.__vnode) {
      this.__resetProps()
    }
    const map = this.constructor.__props
    const vnode = this.vnode
    let name, type
    for(name in vnode) {
      type = map[name]
      type.update(this, name, vnode[name])
    }
    this.__vnode = this.vnode
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.__props
    const vnode = this.__vnode
    let name, type
    for(name in vnode) {
      type = map[name]
      type.reset(this, name, vnode[name])
    }
  }

  /**
   * @private
   */
  __setHandlers() {
    const handlers = this.__handlers
    let eventName, listeners, callback, listener, options
    for([eventName, listeners] of handlers.entries()) {
      for([callback, listener] of listeners.entries()) {
        options = listener.__options
        if(listener.__on) {
          this.node.addEventListener(eventName, listener, {
            capture : options.capture || false,
            once : options.once || false,
            passive : options.passive || false,
          })
          continue
        }
        this.node.removeEventListener(eventName, listener, {
          capture : options.capture,
        })
        listeners.delete(callback)
      }
      listeners.size || handlers.delete(eventName)
    }
  }

  /**
   * @private
   */
  __setChildren() {
    if(this.__children === undefined) {
      this.children = this.children || []
      return
    }
    const node = this.node
    const childrenA = this.children
    const childrenB = []
    const indexA = this.__index
    let indexB = {}
    let childB, key
    const forEach = childB => {
      if(skipTypes[typeof childB] || childB === null) {
        return
      }
      if(Array.isArray(childB)) {
        childB.forEach(forEach)
        return
      }
      if(!childB.props && !childB.__init) {
        childB = new TextType(childB)
        indexB = null
      }
      childrenB.push(childB)
      if(!childrenA) {
        childB.__parent = this
        childB.__init()
        node.append(childB.__node || childB.node)
      }
      if(!indexB) {
        return
      }
      key = childB.props.key
      if(key === undefined) {
        indexB = null
      }
      else if(indexB[key]) {
        indexB = null
        console.warn('Duplicate key detected', key, childB, this)
      }
      else indexB[key] = childB
    }
    forEach(this.__children)
    this.__children = childrenB
    this.__index = indexB
    if(!childrenA) {
      this.children = childrenB
      return
    }
    if(!indexA || !indexB) {
      this.__setChildNodes()
      this.children = childrenB
      return
    }
    const childNodes = node.childNodes
    const length = childrenB.length
    let childA, nodeA, nextA, i, j
    for(childA of childrenA) {
      if(!indexB[childA.props.key]) {
        childA.__destroy()
      }
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      if(indexA[childB.props.key]) {
        continue
      }
      nextA = childNodes[i]
      childB.__parent = this
      childB.__init()
      if(nextA) {
        nextA.before(childB.__node || childB.node)
      }
      else {
        node.append(childB.__node || childB.node)
      }
      childB.__mount()
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      key = childB.props.key
      childA = indexA[key]
      if(!childA) {
        continue
      }
      nodeA = childA.__node || childA.node
      j = indexOf.call(childNodes, nodeA)
      if(i !== j) {
        nextA = childNodes[i].nextSibling
        if(nextA) {
          if(nodeA !== nextA && nodeA.nextSibling !== nextA) {
            nextA.before(nodeA)
          }
        }
        else node.append(nodeA)
      }
      childA.__updateElem(childB)
      if(childA.constructor === childB.constructor) {
        childrenB[i] = childA
        indexB[key] = childA
      }
    }
    this.children = childrenB
  }

  /**
   * @private
   */
  __setChildNodes() {
    const childrenA = this.children
    const childrenB = this.__children
    const length = Math.max(childrenA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      childA = childrenA[i]
      childB = childrenB[i]
      if(childA === undefined) {
        childB.__parent = this
        childB.__init()
        this.node.append(childB.__node || childB.node)
        childB.__mount?.()
        continue
      }
      if(childB === undefined) {
        childA.__destroy()
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
        if(childA.tagName === childB.tagName && childA.props.key === childB.props.key) {
          childA.__updateElem(childB)
          if(childA.constructor === childB.constructor) {
            childrenB[i] = childA
          }
          continue
        }
      }
      nodeA = childA.node
      childA.__destroy(true)
      childB.__parent = this
      childB.__init()
      nodeA.replaceWith(childB.__node || childB.node)
      childB.__mount?.()
    }
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __updateElem(elem) {
    if(this.constructor !== elem.constructor) {
      this.__replaceElem(elem)
      return
    }
    const prevProps = this.props
    this.props = elem.props
    this.vnode = this.__createVNode()
    this.__assignProps()
    this.__update()
    this.update(prevProps, this.state)
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __replaceElem(elem) {
    const node = this.node
    const children = this.children
    this.children = []
    this.__destroy(true)
    this.vnode = this.__createVNode()
    this.__resetProps()
    this.node = null
    elem.children = children
    elem.__parent = this.__parent
    elem.__init(node)
  }

  /**
   * @private
   */
  __update() {
    const refs = {}
    let ref, item
    for(ref in this) {
      item = this[ref]
      if(item?.props) {
        refs[ref] = item
      }
    }
    this.__render()
    for(ref in refs) {
      item = refs[ref]
      if(this.__contains(item)) {
        this[ref] = item
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @return {boolean}
   * @private
   */
  __contains(elem) {
    let parent = elem
    while(parent = parent.__parent) {
      if(parent.node === this.node) {
        return true
      }
    }
    return false
  }

  /**
   * @private
   */
  __render() {
    this.parent = undefined
    this.assign()
    this.__children = this.render()
    const parentB = this.parent
    if(parentB === undefined) {
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
      }
      this.__setProps()
      this.__setChildren()
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
    if(!this.__node) {
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
    }
    this.__setProps()
    this.__setChildren()
    if(this.node.parentNode !== parentB) {
      parentB.append(this.node)
    }
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode = false) {
    this.destroy()
    this.removeAllListeners()
    this.__setHandlers()
    this.children.forEach(child => child.__destroy(true))
    if(this.__node) {
      this.__node.replaceWith(this.node)
      this.__node = null
    }
    this.__parent = null
    keepNode || this.node.remove()
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.props.tagName || this.constructor.tagName
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
    elem.__init(node, parentNode)
    node || elem.__mount()
    return elem
  }

  /**
   * @param {boolean} value
   */
  static setDebugMode(value) {
    init = init || ElemType.prototype.__init
    ElemType.prototype.__init = value ? debug : init
  }

  /**
   * @param {string} prop
   * @param {constructor @link PropType|constructor @link AttrType|constructor @link EventType} type
   * @return {*}
   * @private
   */
  static __defineProp(prop, type) {
    Object.defineProperty(this.prototype, prop, {
      configurable : true,
      get() {
        return type.get(this, prop)
      },
      set(value) {
        type.set(this, prop, value)
      },
    })
  }

  /**
   * @param {{}} props
   */
  static __defineProps(props) {
    let prop, type
    for(prop in props) {
      type = props[prop]
      if(typeof type === 'string') {
        type = props[prop] = AttrType.define(type)
      }
      this.__defineProp(prop, type)
    }
  }

  /**
   * @private
   */
  static __init() {
    if(this.hasOwnProperty('__props')) {
      return
    }
    if(this !== ElemType) {
      Object.getPrototypeOf(this).__init()
    }
    if(this.hasOwnProperty('props')) {
      this.__defineProps(this.props)
    }
    Object.defineProperties(this, {
      __props : {
        value : { ...this.__props, ...this.props },
      },
      __sampleNode : {
        value : this.__createNode(),
      },
    })
  }

  /**
   * @param {string} [tagName]
   * @return {HTMLElement|*}
   * @private
   */
  static __createNode(tagName = this.tagName) {
    return this.namespace === null ?
      document.createElement(tagName) :
      document.createElementNS(this.namespace, tagName)
  }
}

module.exports = ElemType
