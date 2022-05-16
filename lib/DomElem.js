const window = require('xwindow')
const DomNode = require('./DomNode')

const { document } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class DomElem extends DomNode
{
  className = undefined

  static prefix = ''

  static namespace = ''

  /**
   * @return {*|Element}
   */
  createNode() {
    let name, constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name.startsWith(prefix)) {
      name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    return super.createNode()
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    super.init(deep)
    this.setClassName()
  }

  setClassName() {
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
        break
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
      return attr.has(this)? attr.get(this) : attr.defaultValue
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
      if(!attr.removeOnValue(this, value)) {
        attr.set(this, value)
      }
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.has]
   * @returns {boolean}
   */
  hasAttr(attr) {
    return typeof attr === 'function'?
      attr.has(this) :
      this.node.hasAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.remove]
   */
  removeAttr(attr) {
    if(typeof attr === 'function') {
      attr.remove(this)
    }
    else this.node.removeAttribute(attr)
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
      value === null?
        this.removeAttr(name) :
        this.setAttr(name, value)
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get class() {
    return this.node.classList
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
   * @returns {string}
   */
  get html() {
    return this.node.innerHTML
  }

  /**
   * @param {string} html
   */
  set html(html) {
    this.node.innerHTML = html
  }

  /**
   * @returns {DOMRect}
   */
  get rect() {
    return this.node.getBoundingClientRect()
  }

  /**
   * Get a text content of the node
   * @returns {string}
   */
  get text() {
    return this.node.textContent
  }

  /**
   * Set a text content of the node
   * @param {string} text
   */
  set text(text) {
    this.node.textContent = text
  }

  /**
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    let attr, name
    for(attr of attrs) {
      name = typeof attr === 'string'? attr : attr.attrName
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
}

DomElem.defineMethods([
  'scrollTo',
  'scrollBy',
])

DomElem.defineProps([
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

DomElem.defineProps([
  'id',
  'innerHTML',
  'textContent',
], true)

module.exports = DomElem
