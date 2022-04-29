import { HtmlCaption } from './HtmlCaption'
import { HtmlElem } from './HtmlElem'
import { HtmlTBody } from './HtmlTBody'
import { HtmlTFoot } from './HtmlTFoot'
import { HtmlTHead } from './HtmlTHead'
import { HtmlTr } from './HtmlTr'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-table-element
 */
export class HtmlTable extends HtmlElem
{
  /**
   * @returns {HtmlCaption}
   */
  createCaption() {
    return HtmlCaption.get(this.node.createCaption())
  }

  /**
   * Delete the table caption
   */
  deleteCaption() {
    this.node.deleteCaption()
  }

  /**
   * @returns {HtmlTHead}
   */
  createTHead() {
    return HtmlTHead.get(this.node.createTHead())
  }

  /**
   * Delete the table caption
   */
  deleteTHead() {
    this.node.deleteTHead()
  }

  /**
   * @returns {HtmlTFoot}
   */
  createTFoot() {
    return HtmlTFoot.get(this.node.createTFoot())
  }

  /**
   * Delete the table caption
   */
  deleteTFoot() {
    this.node.deleteTFoot()
  }

  /**
   * @returns {HtmlTBody}
   */
  createTBody() {
    return HtmlTBody.get(this.node.createTBody())
  }

  /**
   * @param {number} [index]
   * @returns {HtmlTr}
   */
  insertRow(index) {
    return HtmlTr.get(this.node.insertRow(index))
  }

  /**
   * @param {number} index
   */
  deleteRow(index) {
    this.node.deleteRow(index)
  }

  /**
   * @param {*} caption {Caption|HTMLTableCaptionElement}
   */
  set caption(caption) {
    this.node.caption = caption.node || caption
  }

  /**
   * @returns {HTMLTableCaptionElement}
   */
  get caption() {
    return this.node.caption
  }

  /**
   * @param {*} tHead {THead|HTMLTableSectionElement}
   */
  set tHead(tHead) {
    this.node.tHead = tHead.node || tHead
  }

  /**
   * @returns {HtmlTHead}
   */
  get tHead() {
    return HtmlTHead.get(this.node.tHead)
  }

  /**
   * @param {*} tFoot {TFoot|HTMLTableSectionElement}
   */
  set tFoot(tFoot) {
    this.node.tFoot = tFoot.node || tFoot
  }

  /**
   * @returns {HtmlTFoot}
   */
  get tFoot() {
    return HtmlTFoot.get(this.node.tFoot)
  }

  /**
   * @returns {HtmlTBody[]}
   */
  get tBodies() {
    return map.call(this.node.tBodies, node => HtmlTBody.get(node))
  }

  /**
   * @returns {HtmlTr[]}
   */
  get rows() {
    return map.call(this.node.rows, node => HtmlTr.get(node))
  }
}
