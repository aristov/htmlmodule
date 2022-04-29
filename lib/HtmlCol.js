import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-col-element
 */
export class HtmlCol extends HtmlElem
{
  /**
   * @param {number} span
   */
  set span(span) {
    this.node.span = span
  }

  /**
   * @returns {number}
   */
  get span() {
    return this.node.span
  }
}
