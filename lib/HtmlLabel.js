import { HtmlElem } from './HtmlElem.js'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-label-element
 */
export class HtmlLabel extends HtmlElem
{
  /**
   * @param {string} htmlFor
   */
  set htmlFor(htmlFor) {
    this.node.htmlFor = htmlFor
  }

  /**
   * @returns {string}
   */
  get htmlFor() {
    return this.node.htmlFor
  }
}
