import { HtmlElem } from './HtmlElem'
import { HtmlTd } from './HtmlTd'
import { HtmlTh } from './HtmlTh'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tr-element
 */
export class HtmlTr extends HtmlElem
{
  /**
   * @param {number} [index]
   * @returns {HtmlTd}
   */
  insertCell(index) {
    return HtmlTd.get(this.node.insertCell(index))
  }

  /**
   * @param {number} index
   */
  deleteCell(index) {
    this.node.deleteCell(index)
  }

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

  /**
   * @returns {array.HtmlTd|array.HtmlTh}
   */
  get cells() {
    return map.call(this.node.cells, node => {
      return node.localName === 'th'?
        HtmlTh.get(node) :
        HtmlTd.get(node)
    })
  }
}
