import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-q-element
 */
export class HtmlQ extends HtmlElem
{
  /**
   * @param {string} cite
   */
  set cite(cite) {
    this.node.cite = cite
  }

  /**
   * @returns {string}
   */
  get cite() {
    return this.node.cite
  }
}
