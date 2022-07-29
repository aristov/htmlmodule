const { Comment, CustomEvent, HTMLElement, document } = require('xwindow')
const EventType = require('./EventType')
const TextType = require('./TextType')

const { indexOf } = Array.prototype
const childFilterSet = new Set([undefined, null, false])
const nullNode = document.createElement('div')
const sampleNode = document.createElement('div')
const specialProps = {
  children : true,
  node : true,
  tagName : true,
}
const descriptors = {
  __props : {
    writable : true,
    value : null,
  },
  __prevProps : {
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
  __children : {
    writable : true,
    value : null,
  },
  __updating : {
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
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
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
    this.__prevProps = this.__props
    this.__props = {}
    this.__update()
    this.update(this.props, prevState)
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
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  __init(node, parentNode) {
    if(this.node) {
      return
    }
    this.init()
    this.__assignProps()
    this.__children = this.render()
    if(this.parent === undefined) {
      this.node = node || this.createNode()
      node || parentNode?.append(this.node)
      this.__setProps()
      this.__setChildren()
      node && mount(this)
      return
    }
    if(this.parent === null) {
      this.__node = new Comment(this.constructor.name)
      if(node?.parentNode) {
        node.replaceWith(this.__node)
      }
      else parentNode?.append(this.__node)
      node && mount(this)
      return
    }
    if(!this.parent.props) {
      this.node = node || this.createNode()
      this.__setProps()
      this.__setChildren()
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
      this.parent.append(this.node)
      node && mount(this)
      return
    }
    this.node = !parentNode && node || this.createNode()
    if(node && parentNode) {
      this.children.forEach(child => child.__destroy())
      this.children = undefined
    }
    this.__setProps()
    this.__setChildren()
    this.parent.__init()
    this.__node = this.parent.node
    node?.replaceWith(this.parent.__node || this.parent.node)
    node && mount(this)
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
   * @private
   */
  __setProps() {
    if(this.__prevProps) {
      this.__resetProps()
    }
    this.__setRoleAttr()
    this.__setClassName()
    this.__updateProps()
    this.__setHandlers()
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.props
    const node = this.node
    const props = this.__props
    const prevProps = this.__prevProps
    const handlers = {
      classList() {
        void null
      },
      className() {
        void null
      },
      attributes() {
        for(attr in prevProps.attributes) {
          if(!props.attributes?.hasOwnProperty(attr)) {
            node.removeAttribute(attr)
          }
        }
      },
      dataset() {
        for(attr in prevProps.dataset) {
          if(!props.dataset?.hasOwnProperty(attr)) {
            delete node.dataset[attr]
          }
        }
      },
      style() {
        if(!props.hasOwnProperty('style')) {
          node.removeAttribute('style')
        }
      },
    }
    let name, attr, handler
    for(name in prevProps) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      if(props.hasOwnProperty(name)) {
        continue
      }
      attr = map[name]
      if(attr === null) {
        node[name] = null
      }
      else node.removeAttribute(attr)
    }
  }

  /**
   * @private
   */
  __updateProps() {
    const map = this.constructor.props
    const node = this.node
    const props = this.__props
    const handlers = {
      classList() {
        void null
      },
      className() {
        void null
      },
      attributes() {
        for(attr in props.attributes) {
          value = props.attributes[attr]
          if(value === null) {
            node.removeAttribute(attr)
          }
          else if(value !== node.getAttribute(attr)) {
            node.setAttribute(attr, value)
          }
        }
      },
      dataset() {
        for(attr in props.dataset) {
          value = props.dataset[attr]
          if(value === null) {
            delete node.dataset[attr]
          }
          else if(value !== node.dataset[attr]) {
            node.dataset[attr] = value
          }
        }
      },
      style() {
        if(props.style === null) {
          node.removeAttribute('style')
          return
        }
        if(typeof props.style === 'string') {
          node.style = props.style
          return
        }
        Object.assign(sampleNode.style, props.style)
        value = sampleNode.getAttribute('style')
        if(!value.length) {
          node.removeAttribute('style')
        }
        else if(value !== node.getAttribute('style')) {
          node.style = value
        }
        sampleNode.style = ''
      },
    }
    let name, attr, value, handler
    for(name in props) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      if(!(name in node)) {
        continue
      }
      attr = map[name]
      value = props[name]
      if(attr === null) {
        node[name] = value
      }
      else if(value === null) {
        node.removeAttribute(attr)
      }
      else if(value !== node[name]) {
        node[name] = value
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
    let className = this.__props.className
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
   * @private
   */
  __setChildren() {
    if(this.children === null) {
      return
    }
    const children = this.__children
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
        child.__init()
        node.append(child.__getAnchorNode(this) || child.node)
      }
      this.children = childrenB
      return
    }
    const indexA = {}
    const indexB = {}
    let childA, key
    for(childA of childrenA) {
      key = childA?.props?.key ?? null
      if(key === null) {
        this.__setChildNodes(childrenB)
        return
      }
      indexA[key] = childA
    }
    let childB
    for(childB of childrenB) {
      key = childB.props?.key ?? null
      if(key === null) {
        this.__setChildNodes(childrenB)
        return
      }
      indexB[key] = childB
    }
    const childNodes = node.childNodes
    const length = childrenB.length
    let nextA, i, j
    for(childA of childrenA) {
      indexB[childA.props.key] || childA.__destroy()
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      if(indexA[childB.props.key]) {
        continue
      }
      nextA = childNodes[i]
      childB.__init()
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
      childA = indexA[childB.props.key]
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
      childA.__updateElem(childB)
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
  __getAnchorNode(context) {
    if(this.parent === undefined) {
      return null
    }
    if(this.parent === null || !this.parent.props || this.parent === context) {
      return this.__node
    }
    return this.parent.__getAnchorNode(context) || this.__node
  }

  /**
   * @param {[]} childrenB
   * @private
   */
  __setChildNodes(childrenB) {
    const childrenA = this.children || []
    const length = Math.max(childrenA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      childA = childrenA[i]
      childB = childrenB[i]
      if(childA === undefined) {
        childB.__init()
        this.node.append(childB.__getAnchorNode(this) || childB.node)
        mount(childB)
        continue
      }
      if(childB === undefined) {
        childA.__destroyParents?.()
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
      nodeA = childA.__node || childA.node
      childA.__destroyParents?.()
      childA.__destroy(true)
      childB.__init()
      nodeA.replaceWith(childB.__getAnchorNode(this) || childB.node)
      mount(childB)
    }
    this.children = childrenB
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
    this.__prevProps = this.__props
    this.__props = {}
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
    let attr
    for(attr of Array.from(node.attributes)) {
      node.removeAttribute(attr.name)
    }
    this.__destroyParents()
    this.destroy()
    this.removeAllListeners()
    if(this.__node) {
      this.__node.replaceWith(node)
      this.__node = null
    }
    this.node = nullNode
    elem.children = this.children
    elem.__init(node, node.parentNode)
  }

  /**
   * @private
   */
  __destroyParents() {
    if(this.parent?.props) {
      this.parent.__destroyParents(true)
    }
    if(!arguments[0]) {
      return
    }
    this.destroy()
    this.removeAllListeners()
    if(this.__node) {
      this.__node.replaceWith(this.node)
      this.__node = null
    }
    this.node = nullNode
  }

  /**
   * @private
   */
  __update() {
    if(this.__updating) {
      return
    }
    const refs = {}
    let ref, item
    for(ref in this) {
      item = this[ref]
      if(item?.node) {
        refs[ref] = item
      }
    }
    this.__render()
    for(ref in refs) {
      item = refs[ref]
      if(this.node.contains(item.node)) {
        this[ref] = item
      }
      if(!this.node.contains(this[ref].node)) {
        delete this[ref]
      }
    }
  }

  /**
   * @private
   */
  __render() {
    const parentA = this.parent
    this.parent = undefined
    this.__children = this.render()
    const parentB = this.parent
    if(!this.node) {
      this.node = this.createNode()
    }
    if(parentB === undefined) {
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
        parentA?.props && parentA.__destroy(true)
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
    if(!parentB.props) {
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      this.__setProps()
      this.__setChildren()
      parentB.append(this.node)
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
      this.__updating = true
      parentA.__updateElem(parentB)
      this.__updating = false
      if(parentA.constructor === parentB.constructor) {
        this.parent = parentA
      }
      return
    }
    this.__node = null
    parentB.__init()
    this.__node = parentB.node
    parentA.node.replaceWith(this.__node)
    mount(parentB)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode = false) {
    this.destroy()
    this.removeAllListeners()
    if(this.children) {
      let item
      for(item of this.children) {
        item.__destroy(true)
      }
    }
    if(this.__node) {
      keepNode || this.__node.remove()
      this.__node = null
    }
    if(!this.node) {
      return
    }
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
    elem.__init(node, parentNode)
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
