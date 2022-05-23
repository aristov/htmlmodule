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
    let constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name?.startsWith(prefix)) {
      const name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    throw Error(`Unable to resolve localName for "${ prefix }" prefix`)
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setClassName()
    super.init(deep)
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
    const classList = this.node.classList
    do {
      if(constructor.name.startsWith(prefix)) {
        return
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
      attr.set(this, value)
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
      value === null ?
        this.node.removeAttribute(name) :
        this.node.setAttribute(name, value)
    }
  }

  /**
   * @return {string[]}
   */
  get class() {
    return this.node.className.split(' ')
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
   * @param {string[]|constructor[]} attrs
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
          if(value !== undefined) {
            this.setAttr(attr, value)
          }
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

DomElem.defineProps([
  'id',
  'innerHTML',
  'textContent',
], true)

Object.defineProperties(DomElem.prototype, {
  html : Object.getOwnPropertyDescriptor(DomElem.prototype, 'innerHTML'),
  text : Object.getOwnPropertyDescriptor(DomElem.prototype, 'textContent'),
})

module.exports = DomElem
