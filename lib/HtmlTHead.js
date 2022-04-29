import { HtmlElem } from './HtmlElem'
import { HtmlTr } from './HtmlTr'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-thead-element
 */
export class HtmlTHead extends HtmlElem
{
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
   * @returns {HtmlTr[]}
   */
  get rows() {
    return map.call(this.node.rows, node => HtmlTr.get(node))
  }
}
