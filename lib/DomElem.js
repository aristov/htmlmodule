import window from 'window'
import { AttrType } from './AttrType.js'
import { DomNode } from './DomNode.js'

const { document } = window

let counter = 0

/**
 * @see https://www.w3.org/TR/dom/#interface-element
 */
export class DomElem extends DomNode
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
   * Generate a unique identifier among the document's tree
   * @returns {String}
   */
  generateId() {
    let id, str
    do {
      str = (counter++).toString(36)
      id = 'ID_' + '0'.repeat(Math.max(0, 7 - str.length)) + str
    }
    while(document.getElementById(id))
    return id
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
   * @param {KeyboardEvent} event
   * @param {DomElem} elem
   */
  onKeyDown(event, elem) {
    const handler = this['onKeyDown_' + event.code]
    if(typeof handler === 'function') {
      handler.apply(this, arguments)
    }
  }

  /**
   * @param {KeyboardEvent} event
   * @param {DomElem} elem
   */
  onKeyUp(event, elem) {
    const handler = this['onKeyUp_' + event.code]
    if(typeof handler === 'function') {
      handler.apply(this, arguments)
    }
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
   * @returns {CSSStyleDeclaration}
   */
  get computedStyle() {
    return window.getComputedStyle(this.node)
  }

  /**
   * @param {string} html
   */
  set html(html) {
    this.node.innerHTML = html
  }

  /**
   * @returns {string}
   */
  get html() {
    return this.node.innerHTML
  }

  /**
   * @returns {DOMRect}
   */
  get rect() {
    return this.node.getBoundingClientRect()
  }

  /**
   * Set a text content of the node
   * @param {string} text
   */
  set text(text) {
    this.node.textContent = text
  }

  /**
   * Get a text content of the node
   * @returns {string}
   */
  get text() {
    return this.node.textContent
  }

  /**
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    for(const item of attrs) {
      AttrType.define(this, item)
    }
  }

  /**
   * @return {{}}
   */
  static get storage() {
    const json = localStorage.getItem(this.name)
    return json? JSON.parse(json) : {}
  }

  /**
   * @param {{}} storage
   */
  static set storage(storage) {
    storage = Object.assign(this.storage, storage)
    localStorage.setItem(this.name, JSON.stringify(storage))
  }
}

DomElem.defineMethods([
  'scrollTo',
  'scrollBy',
])

DomElem.defineAttrs([
  'role',
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
], true)
