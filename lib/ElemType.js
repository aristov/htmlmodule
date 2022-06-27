const window = require('xwindow')
const events = require('./events')

const { indexOf, map } = Array.prototype
const { CustomEvent, document } = window
const AttrNameMap = {
  htmlFor : 'for',
  className : 'class',
  defaultValue : 'value',
  defaultChecked : 'checked',
  defaultSelected : 'selected',
  dataset : null,
  value : null,
  checked : null,
  selected : null,
  indeterminate : null,
}
const nullNode = document.createElement('div')

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class ElemType
{
  static tagName = 'DIV'

  static role = undefined

  static class = undefined

  static className = undefined

  static specialProps = {
    children : true,
    class : true,
    className : true,
    key : true,
    node : true,
    role : true,
    tagName : true,
  }

  static specialAttributes = {
    class : true,
    role : true,
  }

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
   * @private
   */
  _setRoleAttr() {
    let role = this.props.role
    if(role === undefined) {
      role = this.constructor.role
    }
    if(role) {
      this.node.setAttribute('role', role)
    }
    else this.node.removeAttribute('role')
  }

  /**
   * @private
   */
  _setClassName() {
    let className = this.props.className
    if(className === undefined) {
      className = this.constructor.className
    }
    if(className === undefined) {
      this._setClass()
      return
    }
    if(className === null) {
      this.node.removeAttribute('class')
    }
    else this.node.className = className
  }

  /**
   * @private
   */
  _setClass() {
    const items = new Set
    let constructor = this.constructor
    let name
    do {
      name = constructor.hasOwnProperty('class') && constructor.class
      if(name === undefined) {
        break
      }
      if(constructor === this.constructor && this.props.hasOwnProperty('class')) {
        name = this.props.class
      }
      if(name === null) {
        continue
      }
      name ||= constructor.name
      name && items.add(name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
    if(items.size) {
      this.node.className = Array.from(items).join(' ')
    }
    else this.node.removeAttribute('class')
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
    else this.node.setAttribute(attr, value)
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
    this._setRoleAttr()
    this._setClassName()
    this._setProps()
    const children = this.render()
    this.children = [children].flat(Infinity).filter(Boolean)
    if(node) {
      if(children !== undefined) {
        this._setChildren()
      }
      this.init()
      return
    }
    this.node.append(...this.children.map(child => {
      if(child.props) {
        child._init()
        return child.node
      }
      return child
    }))
  }

  /**
   * @private
   */
  _setProps() {
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
    this._setClassName()
    this._render()
    this.update(this.props, prevState)
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
    this.children = [children].flat(Infinity).filter(Boolean)
    if(children !== undefined) {
      this._setChildren()
    }
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
   * @param {ElemType} elem
   * @private
   */
  _udpateElem(elem) {
    if(this.constructor !== elem.constructor) {
      this._replaceElem(elem)
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
    this._setRoleAttr()
    this._setClassName()
    this._setProps()
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
  _setChildren() {
    const indexA = {}
    const indexB = {}
    let nodeA, childA, key
    for(nodeA of this.node.childNodes) {
      childA = nodeA.__instance
      key = childA?.key
      if(!key) {
        this._setChildNodes()
        return
      }
      indexA[key] = childA
    }
    let childB
    for(childB of this.children) {
      key = childB.key
      if(!key) {
        this._setChildNodes()
        return
      }
      indexB[key] = childB
    }
    const children = map.call(this.node.children, node => node.__instance)
    let nextA, i, j
    for(childA of children) {
      indexB[childA.key] || childA._destroy()
    }
    for(i = 0; i < this.children.length; i++) {
      childB = this.children[i]
      if(indexA[childB.key]) {
        continue
      }
      nextA = this.node.children[i]
      childB._init()
      if(nextA) {
        nextA.before(childB.node)
      }
      else {
        this.node.append(childB.node)
      }
      init(childB)
    }
    for(i = 0; i < this.children.length; i++) {
      childB = this.children[i]
      childA = indexA[childB.key]
      if(!childA) {
        continue
      }
      j = indexOf.call(this.node.children, childA.node)
      if(i !== j) {
        nextA = this.node.children[i].nextSibling
        if(nextA) {
          if(childA.node !== nextA && childA.node.nextSibling !== nextA) {
            nextA.before(childA.node)
          }
        }
        else {
          this.node.append(childA.node)
        }
      }
      childA._udpateElem(childB)
      if(childA.constructor === childB.constructor) {
        this.children[i] = childA
      }
    }
  }

  /**
   * @private
   */
  _setChildNodes() {
    const childNodes = Array.from(this.node.childNodes)
    const length = Math.max(childNodes.length, this.children.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      nodeA = childNodes[i]
      childB = this.children[i]
      if(nodeA === undefined) {
        childB._init?.()
        this.node.append(childB.node || childB)
        init(childB)
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
            this.children[i] = childA
          }
          continue
        }
      }
      childA._destroy?.(true)
      childB._init?.()
      nodeA.replaceWith(childB.node || childB)
      init(childB)
    }
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
  init() {
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
   * @param {boolean} [keepNode]
   * @private
   */
  _destroy(keepNode = false) {
    if(this.node === nullNode) {
      return
    }
    this.destroy()
    this.removeAllListeners()
    for(const node of this.node.children) {
      node.__instance?._destroy(true)
    }
    keepNode || this.node.remove()
    delete this.node.__instance
    this.node = nullNode
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
   * @param {constructor @link ElemType} type
   * @return {null|ElemType|*}
   */
  find(type) {
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
   * @returns {NamedNodeMap}
   */
  get attributes() {
    return this.node.attributes
  }

  /**
   * @param {{}} attributes
   */
  set attributes(attributes) {
    const specialAttributes = this.constructor.specialAttributes
    let name, value
    for({ name } of Array.from(this.node.attributes)) {
      if(!specialAttributes[name] && !attributes.hasOwnProperty(name)) {
        this.node.removeAttribute(name)
      }
    }
    for(name in attributes) {
      value = attributes[name]
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
      return
    }
    if(!value || value.constructor !== Object) {
      this.node.classList = value
      return
    }
    let key
    for(key in value) {
      this.node.classList.toggle(key, value[key])
    }
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
    let name, value
    for(name in Object.assign({}, this.node.dataset)) {
      if(!dataset.hasOwnProperty(name)) {
        delete this.node.dataset[name]
      }
    }
    for(name in dataset) {
      value = dataset[name]
      if(value === null) {
        delete this.node.dataset[name]
      }
      else this.node.dataset[name] = value
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
    const node = elem.props.node
    elem._init(node)
    parentNode?.append(elem.node)
    node || init(elem)
    return elem
  }
}

/**
 * @param {ElemType} item
 */
function init(item) {
  if(item.node) {
    item.children.forEach(init)
    item.init()
  }
}

ElemType.defineEvents(Object.keys(events))

ElemType.defineMethods([
  'scrollTo',
  'scrollBy',
])

ElemType.defineProps([
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
  'className',
], true)

module.exports = ElemType
