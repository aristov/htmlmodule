import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tr-element
 */
export class HtmlTr extends HtmlElem
{
  /**
   * @returns {number}
   */
  get rowIndex() {
    return this.node.rowIndex
  }

  /**
   * @returns {number}
   */
  get sectionRowIndex() {
    return this.node.sectionRowIndex
  }
}
