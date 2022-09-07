const { Comment, CustomEvent, HTMLElement, document } = require('xwindow')
const EventType = require('./EventType')
const TextType = require('./TextType')
const Style = require('./Style')

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
  __index : nullDescriptor,
  __handlers : nullDescriptor,
  __loop : {
    writable : true,
    value : false,
  },
  props : nullDescriptor,
  vnode : nullDescriptor,
  node : nullDescriptor,
  children : nullDescriptor,
  parent : {
    writable : true,
    value : undefined,
  },
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

  static specialProps = specialProps

  static __mounted = new Set

  static __debug = false

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.constructor.__init()
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    if(props.children === undefined) {
      props.children = null
    }
    Object.defineProperties(this, descriptors)
    this.props = props
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
    const prevState = Object.assign({}, this.state)
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
    ElemType.__mounted.clear()
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

  blur() {
    this.node.blur()
  }

  click() {
    this.node.click()
  }

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
      callback.call(this, e, this.__getElemByNode(e.target))
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
    let eventName, listeners, listener
    for([eventName, listeners] of this.__handlers.entries()) {
      if(typeof listeners === 'function') {
        listeners.__on = false
        continue
      }
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
    this.__handlers = new Map
    this.vnode = this.__createVNode()
    this.state && Object.defineProperty(this, 'state', {
      enumerable : false,
      value : this.state,
    })
    this.init()
    this.__assignProps()
    this.__children = this.render()
    if(this.parent === undefined) {
      this.node = node || this.__createNode()
      node || parentNode?.append(this.node)
      this.__setProps()
      this.__setChildren()
      node && ElemType.__mount(this)
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
      node && ElemType.__mount(this)
      return
    }
    if(!this.parent.props) {
      this.node = node || this.__createNode()
      this.__setProps()
      this.__setChildren()
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
      this.parent.append(this.node)
      node && ElemType.__mount(this)
      return
    }
    this.node = !parentNode && node || this.__createNode()
    if(node && parentNode) {
      this.children.forEach(child => child.__destroy())
      this.children = []
    }
    this.__setProps()
    this.__setChildren()
    this.parent.__init()
    this.__node = this.parent.node
    node?.replaceWith(this.parent.__node || this.parent.node)
    node && ElemType.__mount(this)
  }

  /**
   * @private
   */
  __assignProps() {
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
   * @return {*|Element}
   * @private
   */
  __createNode() {
    const constructor = this.constructor
    const namespace = constructor.namespace
    const tagName = this.props.tagName || constructor.tagName
    const node = namespace === null ?
      document.createElement(tagName) :
      document.createElementNS(namespace, tagName)
    if(ElemType.__debug) {
      node.__elem = this
    }
    return node
  }

  /**
   * @private
   */
  __createVNode() {
    const vnode = {
      role : this.constructor.role,
      className : this.constructor.__getClassName(),
    }
    Object.defineProperty(vnode, 'classList', nullDescriptor)
    return vnode
  }

  /**
   * @private
   */
  __setProps() {
    if(this.__vnode) {
      this.__resetProps()
    }
    this.__updateProps()
    this.__setHandlers()
    this.__vnode = this.vnode
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.__props
    const vnodeA = this.__vnode
    const vnodeB = this.vnode
    const node = this.node
    const handlers = {
      attributes() {
        for(attr in vnodeA.attributes) {
          if(!vnodeB.attributes?.hasOwnProperty(attr)) {
            node.removeAttribute(attr)
          }
        }
      },
      dataset() {
        for(attr in vnodeA.dataset) {
          if(!vnodeB.dataset?.hasOwnProperty(attr)) {
            delete node.dataset[attr]
          }
        }
      },
    }
    let name, attr, handler
    for(name in vnodeA) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      if(vnodeB.hasOwnProperty(name)) {
        continue
      }
      attr = map[name]
      if(attr) {
        node.removeAttribute(attr.nodeName || attr)
      }
      else node[name] = null
    }
  }

  /**
   * @private
   */
  __updateProps() {
    const map = this.constructor.__props
    const vnode = this.vnode
    const node = this.node
    const handlers = {
      className : () => {
        this.__setClassName()
      },
      attributes() {
        for(attr in vnode.attributes) {
          value = vnode.attributes[attr]
          if(value === null) {
            node.removeAttribute(attr)
          }
          else if(value !== node.getAttribute(attr)) {
            node.setAttribute(attr, value)
          }
        }
      },
      dataset() {
        for(attr in vnode.dataset) {
          value = vnode.dataset[attr]
          if(value === null) {
            delete node.dataset[attr]
          }
          else if(value !== node.dataset[attr]) {
            node.dataset[attr] = value
          }
        }
      },
    }
    let name, attr, nodeName, value, handler
    for(name in vnode) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      attr = map[name]
      value = vnode[name]
      if(!attr) {
        if(value != node[name]) {
          node[name] = value
        }
        continue
      }
      nodeName = attr.nodeName || attr
      if(value === false || value === null) {
        node.removeAttribute(nodeName)
        continue
      }
      if(value === true) {
        node.hasAttribute(nodeName) || node.setAttribute(nodeName, '')
        continue
      }
      if(value != node.getAttribute(nodeName)) {
        node.setAttribute(nodeName, value)
      }
    }
  }

  /**
   * @private
   */
  __setHandlers() {
    const handlers = this.__handlers
    let eventName, listeners, callback, listener, options
    for([eventName, listeners] of handlers.entries()) {
      if(typeof listeners === 'function') {
        if(listeners.__on) {
          this.node[eventName] = listeners
          listeners.__on = false
          continue
        }
        this.node[eventName] = null
        handlers.delete(eventName)
        continue
      }
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

  static __getClassName() {
    if(this.hasOwnProperty('className')) {
      return this.className
    }
    const items = new Set
    let constructor = this
    while(constructor.class !== null) {
      items.add(constructor.class)
      constructor = Object.getPrototypeOf(constructor)
    }
    return this.className = Array.from(items).join(' ')
  }

  /**
   * @private
   */
  __setClassName() {
    const className = this.vnode.className
    const classList = this.vnode.classList
    const list = Array.isArray(classList) ?
      [className, ...classList] :
      [className, classList]
    const value = list.filter(Boolean).join(' ')
    if(!value) {
      this.node.removeAttribute('class')
    }
    else if(value !== this.node.getAttribute('class')) {
      this.node.setAttribute('class', value)
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
        childB.__init()
        node.append(childB.__getAnchorNode(this))
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
      childB.__init()
      if(nextA) {
        nextA.before(childB.__getAnchorNode(this))
      }
      else {
        node.append(childB.__getAnchorNode(this))
      }
      ElemType.__mount(childB)
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      key = childB.props.key
      childA = indexA[key]
      if(!childA) {
        continue
      }
      nodeA = childA.__getAnchorNode(this)
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
        childB.__init()
        this.node.append(childB.__getAnchorNode(this))
        ElemType.__mount(childB)
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
      childB.__init()
      nodeA.replaceWith(childB.__getAnchorNode(this))
      ElemType.__mount(childB)
    }
  }

  /**
   * @param {ElemType} context
   * @return {null|Comment|Element}
   * @private
   */
  __getAnchorNode(context) {
    const node = arguments[1] ? null : this.node
    if(this.parent === undefined || this.parent === context) {
      return node
    }
    if(this.parent === null || !this.parent.props) {
      return this.__node
    }
    return this.parent.__getAnchorNode(context, true) || this.__node || node
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __updateElem(elem) {
    if(this.__loop) {
      return
    }
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
    elem.__init(node, node.parentNode)
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
   * todo __parent (optimization)
   */
  __contains(elem) {
    return !!this.find(ElemType, item => item.node === elem.node)
  }

  /**
   * @private
   */
  __render() {
    const parentA = this.parent
    this.parent = undefined
    this.__children = this.render()
    const parentB = this.parent
    if(parentB === undefined) {
      parentA?.props && parentA.__destroy(true)
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
      }
      this.__setProps()
      this.__setChildren()
      return
    }
    if(parentB === null) {
      parentA?.props && parentA.__destroy(true)
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      else this.node.remove()
      return
    }
    if(!parentB.props) {
      parentA?.props && parentA.__destroy(true)
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      this.__setProps()
      this.__setChildren()
      if(this.node.parentNode !== parentB) {
        parentB.append(this.node)
      }
      return
    }
    if(!parentA) {
      const node = new Comment(this.constructor.name)
      this.node.replaceWith(node)
      this.__setProps()
      this.__setChildren()
      parentB.__init()
      node.replaceWith(this.__node = parentB.node)
      return
    }
    if(!parentA.props) {
      this.__setProps()
      this.__setChildren()
      parentB.__init()
      this.__node.replaceWith(parentB.node)
      this.__node = parentB.node
      return
    }
    this.__setProps()
    this.__setChildren()
    if(parentB.tagName === parentA.tagName) {
      if(parentA.constructor === parentB.constructor) {
        this.parent = parentA
      }
      this.__loop = true
      parentA.__updateElem(parentB)
      this.__loop = false
      return
    }
    this.__node = null
    parentA.children = []
    parentA.__destroy(true)
    parentB.__init()
    this.__node = parentB.node
    parentA.node.replaceWith(this.__node)
  }

  /**
   * @param {Element} node
   * @return {ElemType|*|null}
   * @private
   */
  __getElemByNode(node) {
    return node === this.node ?
      this :
      this.find(ElemType, elem => elem.node === node)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode = false) {
    if(this.__loop) {
      return
    }
    this.destroy()
    this.removeAllListeners()
    this.__setHandlers()
    this.__loop = true
    this.children.forEach(child => child.__destroy(true))
    if(this.parent?.props) {
      this.parent.__destroy(true)
    }
    this.__loop = false
    if(this.__node) {
      this.__node.replaceWith(this.node)
      this.__node = null
    }
    keepNode || this.node.remove()
  }

  /**
   * @return {{}}
   */
  get attributes() {
    return this.vnode.attributes
  }

  /**
   * @param {{}} attributes
   */
  set attributes(attributes) {
    const vnode = this.vnode
    if(!attributes) {
      delete vnode.attributes
      return
    }
    if(vnode.attributes) {
      attributes = Object.assign(vnode.attributes, attributes)
    }
    delete vnode.attributes
    vnode.attributes = attributes
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.props.tagName || this.constructor.tagName
  }

  static defineAttrs(attrs) {
    this.attrs = attrs
  }

  /**
   * @param {string[]|(constructor[] @link AttrType)} attrs
   */
  static __defineAttrs(attrs) {
    for(const attr of attrs) {
      const prop = attr.propName || attr
      this.__defineAttr(prop, attr)
    }
  }

  static __defineAttr(prop, attr) {
    Object.defineProperty(this.prototype, prop, {
      configurable : true,
      get() {
        return attr.get(prop, this)
      },
      set(value) {
        attr.set(this, prop, value)
      },
    })
  }

  static defineProps(props) {
    this.props = props
  }

  /**
   * @param {{}} props
   */
  static __defineProps(props) {
    let value
    for(const prop in props) {
      value = props[prop]
      if(typeof value === 'function') {
        this.__defineAttr(prop, value)
      }
      else this.__defineProp(prop)
    }
  }

  static __defineProp(prop) {
    Object.defineProperty(this.prototype, prop, {
      configurable : true,
      get() {
        return this.vnode[prop]
      },
      set(value) {
        this.vnode[prop] = value
      },
    })
  }

  static defineHandlers(events) {
    this.events = events
  }

  /**
   * @param {[]} events
   */
  static __defineHandlers(events) {
    for(const type of events) {
      const name = 'on' + type
      if(name in HTMLElement.prototype) {
        this.__defineHandler(name)
      }
    }
  }

  static __defineHandler(name) {
    Object.defineProperty(ElemType.prototype, name, {
      configurable : true,
      set(callback) {
        if(!callback) {
          const listener = this.__handlers.get(name)
          if(listener) {
            listener.__on = false
          }
          return
        }
        const listener = e => {
          return callback.call(this, e, this.__getElemByNode(e.target))
        }
        listener.__on = true
        this.__handlers.set(name, listener)
      },
      get() {
        return this.__handlers.get(name) || null
      },
    })
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
    node || ElemType.__mount(elem)
    ElemType.__mounted.clear()
    return elem
  }

  /**
   * @param {ElemType|TextType} item
   * @private
   */
  static __mount(item) {
    if(!item.props || item.__loop || ElemType.__mounted.has(item)) {
      return
    }
    item.children?.forEach(ElemType.__mount)
    item.mount()
    ElemType.__mounted.add(item)
    let parent = item
    while(parent.parent?.props) {
      ElemType.__mount(parent.parent)
      parent = parent.parent
    }
  }

  static __init() {
    if(this.hasOwnProperty('__props')) {
      return
    }
    if(this !== ElemType) {
      Object.getPrototypeOf(this).__init()
    }
    if(this.hasOwnProperty('attrs')) {
      this.__defineAttrs(this.attrs)
    }
    if(this.hasOwnProperty('props')) {
      this.__defineProps(this.props)
    }
    if(this.hasOwnProperty('events')) {
      this.__defineHandlers(this.events)
    }
    this.__props = { ...this.__props, ...this.props }
  }

  static events = Object.keys(EventType)

  static props = {
    classList : null,
    className : 'class',
    dataset : null,
    id : 'id',
    innerHTML : null,
    role : 'role',
    style : Style,
  }
}

module.exports = ElemType
