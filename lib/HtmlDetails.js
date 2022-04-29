import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-details-element
 */
export class HtmlDetails extends HtmlElem
{
  /**
   * @param {boolean} open
   */
  set open(open) {
    this.node.open = open
  }

  /**
   * @returns {boolean}
   */
  get open() {
    return this.node.open
  }
}
