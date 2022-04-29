import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmltablecellelement
 * @abstract
 */
export class HtmlTableCell extends HtmlElem
{
  /**
   * @param {number} colSpan
   */
  set colSpan(colSpan) {
    this.node.colSpan = colSpan
  }

  /**
   * @returns {number}
   */
  get colSpan() {
    return this.node.colSpan
  }

  /**
   * @param {number} rowSpan
   */
  set rowSpan(rowSpan) {
    this.node.rowSpan = rowSpan
  }

  /**
   * @returns {number}
   */
  get rowSpan() {
    return this.node.rowSpan
  }

  /**
   * @param {string} headers
   */
  set headers(headers) {
    this.node.headers = headers
  }

  /**
   * @returns {string}
   */
  get headers() {
    return this.node.headers
  }

  /**
   * @returns {number}
   */
  get cellIndex() {
    return this.node.cellIndex
  }

  /**
   * @returns {constructor} HtmlTableCell
   */
  static get superAssembler() {
    return HtmlTableCell
  }
}
