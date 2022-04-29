import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-blockquote-element
 */
export class HtmlBlockQuote extends HtmlElem
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
