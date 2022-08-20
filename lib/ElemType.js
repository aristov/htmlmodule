const { Comment, CustomEvent, HTMLElement, document } = require('xwindow')
const EventType = require('./EventType')
const TextType = require('./TextType')

const { indexOf } = Array.prototype
const sampleNode = document.createElement('div')
const skipTypes = {
  undefined : true,
  boolean : true,
}
const specialProps = {
  children : true,
  node : true,
  parent : true,
  tagName : true,
}
const descriptors = {
  __vnode : {
    writable : true,
    value : null,
  },
  __node : {
    writable : true,
    value : null,
  },
  __children : {
    writable : true,
    value : null,
  },
  __index : {
    writable : true,
    value : null,
  },
  __handlers : {
    writable : true,
    value : null,
  },
  __loop : {
    writable : true,
    value : false,
  },
  props : {
    writable : true,
    value : null,
  },
  vnode : {
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
}

/**
 * @abstract
 */
class ElemType
{
  static namespace = undefined

  static tagName = 'DIV'

  static role = undefined

  static class = undefined

  static className = undefined

  static specialProps = specialProps

  static __mounted = new Set

  static __debug = false

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
  }

  /**
   * @return {string}
   */
  toString() {
    this.__init()
    return this.node.outerHTML
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    if(!this.state) {
      this.state = {}
    }
    if(state) {
      if(typeof state === 'function') {
        state = state(this.state)
      }
      Object.assign(this.state, state)
    }
    this.vnode = { attributes : {} }
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
    if(!this.children) {
      return null
    }
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
    if(!this.children) {
      return result
    }
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
    const listener = e => {
      options.once && listeners.delete(callback)
      callback.call(this, e, this.__getElemByNode(e.target))
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
    return this.vnode.attributes[attr] ?? null
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
    const attributes = this.vnode.attributes
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
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  __init(node, parentNode) {
    if(this.node) {
      return
    }
    this.vnode = { attributes : {} }
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
      this.children = undefined
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
    const node = namespace === undefined ?
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
  __setProps() {
    if(this.__vnode) {
      this.__resetProps()
    }
    this.__setRoleAttr()
    this.__setClassName()
    this.__updateProps()
    this.__setHandlers()
    this.__vnode = this.vnode
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.props
    const vnodeA = this.__vnode
    const vnodeB = this.vnode
    const node = this.node
    const handlers = {
      classList() {
        void null
      },
      className() {
        void null
      },
      attributes() {
        for(attr in vnodeA.attributes) {
          if(!vnodeB.attributes.hasOwnProperty(attr)) {
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
      style() {
        if(!vnodeB.hasOwnProperty('style')) {
          node.removeAttribute('style')
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
        node.removeAttribute(attr)
      }
      else node[name] = null
    }
  }

  /**
   * @private
   */
  __updateProps() {
    const map = this.constructor.props
    const vnode = this.vnode
    const node = this.node
    const handlers = {
      classList() {
        void null
      },
      className() {
        void null
      },
      attributes() {
        for(attr in vnode.attributes) {
          valueB = vnode.attributes[attr]
          if(valueB === null) {
            node.removeAttribute(attr)
          }
          else if(valueB !== node.getAttribute(attr)) {
            node.setAttribute(attr, valueB)
          }
        }
      },
      dataset() {
        for(attr in vnode.dataset) {
          valueB = vnode.dataset[attr]
          if(valueB === null) {
            delete node.dataset[attr]
          }
          else if(valueB !== node.dataset[attr]) {
            node.dataset[attr] = valueB
          }
        }
      },
      style() {
        if(typeof vnode.style !== 'string' && vnode.style !== null) {
          Object.assign(sampleNode.style, vnode.style)
          valueB = sampleNode.getAttribute('style')
        }
        else valueB = vnode.style ?? ''
        if(!valueB.length) {
          node.removeAttribute('style')
        }
        else if(valueB !== node.getAttribute('style')) {
          node.style = valueB
        }
        sampleNode.style = ''
      },
    }
    let name, attr, valueA, valueB, handler
    for(name in vnode) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      if(!(name in node)) {
        continue
      }
      attr = map[name]
      valueB = vnode[name]
      if(valueB === null) {
        if(attr) {
          node.removeAttribute(attr)
        }
        else node[name] = null
        continue
      }
      valueA = attr && typeof valueB !== 'boolean'?
        node.getAttribute(attr) :
        node[name]
      if(valueA != valueB) {
        node[name] = valueB
      }
    }
  }

  /**
   * @private
   */
  __setHandlers() {
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
  __setRoleAttr() {
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
  __setClassName() {
    let className = this.vnode.className
    if(className === null) {
      this.node.removeAttribute('class')
      return
    }
    if(className === undefined) {
      className = this.constructor.className
    }
    if(className === undefined) {
      this.__setClass()
    }
    else this.__setClassList([className])
  }

  /**
   * @private
   */
  __setClass() {
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
    this.__setClassList(Array.from(items))
  }

  /**
   * @param classList
   * @private
   */
  __setClassList(classList) {
    const list = this.vnode.classList
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
   * @private
   */
  __setChildren() {
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
      return this.__node || node
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
    this.vnode = { attributes : {} }
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
    this.children = null
    this.__destroy(true)
    this.vnode = { attributes : {} }
    this.__resetProps()
    this.node = null
    elem.children = children ?? undefined
    elem.__init(node, node.parentNode)
  }

  /**
   * @private
   */
  __update() {
    if(this.__loop) {
      return
    }
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
    this.children?.forEach(child => child.__destroy(true))
    if(this.parent?.props) {
      this.__loop = true
      this.parent.__destroy(true)
      this.__loop = false
    }
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
    if(attributes) {
      attributes = Object.assign(vnode.attributes, attributes)
      delete vnode.attributes
      vnode.attributes = attributes
    }
    else vnode.attributes = {}
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.props.tagName || this.constructor.tagName
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
    this.props = { ...this.props, ...props }
    for(const prop in props) {
      Object.defineProperty(this.prototype, prop, {
        configurable : true,
        get() {
          return this.vnode[prop] ?? null
        },
        set(value) {
          this.vnode[prop] = value
        },
      })
    }
  }

  /**
   * @param {[]} types
   */
  static defineHandlers(types) {
    for(const type of types) {
      const name = 'on' + type
      if(!(name in HTMLElement.prototype)) {
        continue
      }
      Object.defineProperty(ElemType.prototype, name, {
        configurable : true,
        set(callback) {
          if(!callback) {
            this.__handlers?.delete(name)
            this.__handlers?.__updates.set(name, null)
            return
          }
          const listener = e => {
            return callback.call(this, e, this.__getElemByNode(e.target))
          }
          if(!this.__handlers) {
            this.__handlers = new Map
            this.__handlers.__updates = new Map
          }
          this.__handlers.set(name, listener)
          this.__handlers.__updates.set(name, listener)
        },
        get() {
          return this.__handlers?.get(name) || null
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
}

ElemType.defineHandlers(Object.keys(EventType))

ElemType.defineMethods([
  'scrollBy',
  'scrollTo',
])

ElemType.defineProps({
  classList : null,
  className : 'class',
  dataset : null,
  id : 'id',
  innerHTML : null,
  style : null,
})

module.exports = ElemType
