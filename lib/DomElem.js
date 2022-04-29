import window from 'window'
import { AttrType } from './AttrType'
import { Class } from './Class'
import { DomNode } from './DomNode'
import { DomTarget } from './DomTarget'

const map = Array.prototype.map
const { document, DocumentFragment } = window
let counter = 0

/**
 * @see https://www.w3.org/TR/dom/#interface-element
 */
export class DomElem extends DomNode
{
  /**
   * @param {{}} init
   * @param {Element} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = document.createElement(this.constructor.localName)
    }
    super.create(init)
    const classList = this.constructor.classList
    if(classList.length) {
      this.classList = classList.join(' ')
    }
  }

  /**
   * @param {{}} init
   * @param {string} [init.text]
   * @param {string} [init.html]
   * @override
   */

  /*init(init) {
    if(init.text) {
      this.text = init.text
      delete init.text
      return
    }
    if(init.html) {
      this.html = init.html
      delete init.html
      return
    }
    super.init(init)
  }*/

  /**
   * @param {DomNode|string|*} siblings
   */
  before(...siblings) {
    if(!this.node.parentNode) {
      this.parent = new DocumentFragment
    }
    this.node.before(...this.flatChildren(siblings))
  }

  /**
   * @param {DomNode|string|*} siblings
   */
  after(...siblings) {
    if(!this.node.parentNode) {
      this.parent = new DocumentFragment
    }
    this.node.after(...this.flatChildren(siblings))
  }

  /**
   * Remove node from tree
   */
  remove() {
    this.node.remove()
  }

  /**
   * @param {DomNode|string|*} objects
   */
  replaceWith(...objects) {
    this.node.replaceWith(...this.flatChildren(objects))
  }

  /**
   * @param {constructor|string} object - DomElem
   * @param {string} [object.selector]
   * @param {function} [object.get]
   * @returns {DomElem|*|null}
   */
  closest(object) {
    return typeof object === 'function'?
      object.get(this.node.closest(object.selector)) :
      DomElem.get(this.node.closest(object))
  }

  /**
   * Generate a unique identifier among the document's tree
   * @returns {String}
   */
  generateId() {
    const doc = this.doc
    let id, str
    do {
      str = (counter++).toString(36)
      id = 'ID_' + '0'.repeat(Math.max(0, 7 - str.length)) + str
    }
    while(doc.getElemById(id))
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

  scrollTo(...args) {
    this.node.scrollTo(...args)
  }

  scrollBy(...args) {
    this.node.scrollBy(...args)
  }

  /**
   * Destroy elem references
   */
  destroyRefs() {
    const doc = this.doc
    const refs = doc.__refs.get(this)
    if(!refs) {
      return
    }
    doc.__refs.delete(this)
    for(const ref of refs.values()) {
      const elems = ref instanceof DomElem? [ref] : Object.values(ref)
      for(const elem of elems) {
        this.contains(elem) || elem.contains(this) || elem.destroy()
      }
    }
    refs.clear()
  }

  /**
   * Remove elem from someone else's references
   */
  clearRefs() {
    for(const [elem, refs] of this.doc.__refs.entries()) {
      for(const type of refs.keys()) {
        const ref = elem.getAttr(type)
        if(Array.isArray(ref)) {
          ref.includes(this) && elem.setAttr(type, ref.filter(item => item !== this))
        }
        else ref === this && elem.removeAttr(type)
      }
    }
  }

  /**
   * Destroy this instance
   * @param {boolean} [keepNode=false]
   */
  destroy(keepNode = false) {
    const node = this.node
    this.clearRefs()
    this.destroyRefs()
    this.destroyChildren(true)
    super.destroy()
    keepNode || node.remove()
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
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      value === null?
        this.removeAttr(name, value) :
        this.setAttr(name, value)
    }
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
   * @return {Proxy<DOMTokenList>}
   */
  get class() {
    return this.getAttr(Class)
  }

  /**
   * @param {array.string|{}|string} value
   */
  set class(value) {
    this.setAttr(Class, value)
  }

  /**
   * Set the class list of the element
   * @param {*} classList token / token list / token-boolean dict {string|string[]|{}}
   */
  set classList(classList) {
    const node = this.node
    if(Array.isArray(classList)) {
      classList.forEach(token => node.classList.add(token))
    }
    else if(classList.constructor === Object) {
      Object.keys(classList).forEach(token => {
        node.classList.toggle(token, classList[token])
      })
    }
    else node.classList = classList
  }

  /**
   * Get the class list of the element as an array
   * @returns {DOMTokenList} classList interface
   */
  get classList() {
    return this.node.classList
  }

  /**
   * @returns {CSSStyleDeclaration}
   */
  get computedStyle() {
    return this.win.node.getComputedStyle(this.node)
  }

  /**
   * @returns {DomDoc}
   */
  get doc() {
    return DomNode.DomDoc.get(this.node.ownerDocument)
  }

  /**
   * @param {string} html
   */
  set html(html) {
    this.destroyChildren(true)
    this.node.innerHTML = html
  }

  /**
   * @returns {string}
   */
  get html() {
    return this.node.innerHTML
  }

  /**
   * Set the unique identifier on the element
   * @param {string} id
   */
  set id(id) {
    this.node.id = id
  }

  /**
   * Get the unique identifier of the element
   * @returns {string}
   */
  get id() {
    return this.node.id
  }

  /**
   * Append element parent
   * @param {DomNode|Element|Document|DocumentFragment|null} parent
   */
  set parent(parent) {
    if(parent) {
      parent.append(this.node)
    }
    else this.remove()
  }

  /**
   * Get parent
   * @returns {DomNode|*|null}
   */
  get parent() {
    return DomNode.get(this.node.parentNode)
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
    this.destroyChildren()
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
   * @returns {Win}
   */
  get win() {
    return this.doc.win
  }

  /**
   * @param {array.(string|constructor)} attrs
   */
  static defineAttrs(attrs) {
    for(const item of attrs) {
      AttrType.define(this, item)
    }
  }

  /**
   * @param {string[]} getters
   */
  static defineGetters(getters) {
    for(const name of getters) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        get() {
          return this.node[name]
        },
      })
    }
  }

  /**
   * @param {string|Element|Document|DocumentFragment} [selectorOrContext=this.selector]
   * @param {Element|Document|DocumentFragment} [context=window.document]
   * @returns {DomElem[]} array of initialized instances
   */
  static init(selectorOrContext = this.selector, context = document) {
    if(selectorOrContext.nodeType) {
      context = selectorOrContext
      selectorOrContext = this.selector
    }
    return map.call(context.querySelectorAll(selectorOrContext), node => {
      const instance = DomElem.__storage.get(node)
      instance && instance.destroy(true)
      return new this({ node })
    })
  }

  /**
   * @returns {string[]}
   */
  static get classList() {
    return []
  }

  /**
   * The local name of the element node
   * @returns {string}
   */
  static get localName() {
    return this === this.superAssembler? '' : this.name
  }

  /**
   * @returns {string}
   */
  static get selector() {
    return this.localName || '*'
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

  /**
   * @returns {constructor} DomElem
   */
  static get superAssembler() {
    return DomElem
  }
}

DomElem.defineGetters([
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

DomElem.prototype.data = null

DomTarget.DomElem = DomElem
