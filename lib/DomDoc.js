import { document } from 'window'
import { DomNode } from './DomNode'
import { DomElem } from './DomElem'
import { HtmlBody } from './HtmlBody'
import { HtmlHead } from './HtmlHead'
import { HtmlHtml } from './HtmlHtml'

/**
 * @see https://www.w3.org/TR/dom/#interface-document
 */
export class DomDoc extends DomNode
{
  /**
   * @returns {Document}
   */
  createNode() {
    return document.implementation.createHTMLDocument()
  }

  /**
   * @param {{}} init
   */
  init(init) {
    super.init(init)
    this.node.addEventListener('keydown', this.onKeyDown, { once : true })
  }

  onKeyDown = () => {
    this.node.documentElement.classList.add('keyboard')
    this.node.addEventListener('mousedown', this.onMouseDown)
  }

  /**
   * @param {MouseEvent} e
   */
  onMouseDown = e => {
    const activeElement = this.node.activeElement
    if(activeElement !== this.node.body && activeElement.contains(e.target)) {
      return
    }
    this.node.documentElement.classList.remove('keyboard')
    this.node.removeEventListener('mousedown', this.onMouseDown)
    this.node.addEventListener('keydown', this.onKeyDown, { once : true })
  }

  /**
   * @return {string}
   */
  toString() {
    return [
      this.node.doctype && '<!doctype html>',
      this.node.documentElement?.outerHTML
    ]
    .filter(Boolean).join('')
  }

  /**
   * @param {boolean} [keepTree=false]
   */
  destroy(keepTree = false) {
    const node = this.node.documentElement
    node.classList.remove('keyboard')
    node.__instance?.destroy(keepTree)
    super.destroy(keepTree)
  }

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
   * @returns {HtmlHtml|null}
   */
  get docElem() {
    return HtmlHtml.get(this.node.documentElement)
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
    return this.node.documentElement?.lang || ''
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
}

DomNode.DomDoc = DomDoc
