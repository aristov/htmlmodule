import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-li-element
 */
export class HtmlLi extends HtmlElem
{
  /**
   * @param {number} value
   */
  set value(value) {
    this.node.value = value
  }

  /**
   * @returns {number}
   */
  get value() {
    return this.node.value
  }
}
