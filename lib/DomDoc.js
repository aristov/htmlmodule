import window from 'window'
import { DomElem } from './DomElem'
import { DomNode } from './DomNode'
import { DomTarget } from './DomTarget'
import { HtmlBody } from './HtmlBody'
import { HtmlHead } from './HtmlHead'
import { HtmlHtml } from './HtmlHtml'

const { document, XMLSerializer } = window
let serializer

/**
 * @see https://www.w3.org/TR/dom/#interface-document
 */
export class DomDoc extends DomNode
{
  /**
   * @param {{}} init
   * @param {Document} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = document.implementation.createHTMLDocument()
    }
    super.create(init)
  }

  /**
   * @param {{}} init
   */
  init(init) {
    super.init(init)
    this.__refs = new Map
    new HtmlHtml({ node : this.node.documentElement })
    this.on('keydown', this.onKeyDown, { once : true })
  }

  /**
   * @param {KeyboardEvent} event
   * @param {DomElem} elem
   */
  onKeyDown(event, elem) {
    this.docElem.class.keyboard = true
    this.on('mousedown', this.onMouseDown)
  }

  /**
   * @param {MouseEvent} event
   * @param {DomElem} elem
   */
  onMouseDown(event, elem) {
    const activeElem = this.activeElem
    if(activeElem !== this.body && activeElem.contains(elem)) {
      return
    }
    this.docElem.class.keyboard = false
    this.off('mousedown', this.onMouseDown)
    this.on('keydown', this.onKeyDown, { once : true })
  }

  /**
   * @param {string} id
   * @returns {DomElem}
   */
  getElemById(id) {
    return DomElem.get(this.node.getElementById(id))
  }

  /**
   * @param {boolean} [keepTree=false]
   */
  destroy(keepTree = false) {
    const elem = this.docElem
    this.removeAllObservers()
    this.removeAllListeners()
    elem.class.keyboard = false
    elem.destroy(keepTree)
    super.destroy()
  }

  /**
   * @returns {DomElem}
   */
  get activeElem() {
    return DomElem.get(this.node.activeElement)
  }

  /**
   * @param {*} body {HtmlBody|HTMLBodyElement}
   */
  set body(body) {
    this.node.body = body.node || body
  }

  /**
   * @returns {HtmlBody}
   */
  get body() {
    return HtmlBody.get(this.node.body)
  }

  /**
   * @return {string}
   */
  toString() {
    const { documentElement, doctype } = this.node
    const html = documentElement? documentElement.outerHTML : ''
    if(!doctype) {
      return html
    }
    serializer || (serializer = new XMLSerializer)
    return serializer.serializeToString(doctype) + html
  }

  /**
   * @returns {HtmlHead}
   */
  get head() {
    return HtmlHead.get(this.node.head)
  }

  /**
   * @param {string} lang
   */
  set lang(lang) {
    const node = this.node.documentElement
    node && (node.lang = lang)
  }

  /**
   * @return {string}
   */
  get lang() {
    const node = this.node.documentElement
    return node? node.lang : ''
  }

  /**
   * @param {string} title
   */
  set title(title) {
    this.node.title = title
  }

  /**
   * @returns {string}
   */
  get title() {
    return this.node.title
  }

  /**
   * @returns {Win|null}
   */
  get win() {
    return DomTarget.Win.get(this.node.defaultView)
  }

  /**
   * @returns {HtmlHtml|null}
   */
  get docElem() {
    return HtmlHtml.get(this.node.documentElement)
  }
}

DomTarget.DomDoc = DomDoc
