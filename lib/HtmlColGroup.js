import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-colgroup-element
 */
export class HtmlColGroup extends HtmlElem
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
