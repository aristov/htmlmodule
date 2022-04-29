import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-title-element
 */
export class HtmlTitle extends HtmlElem
{
  /**
   * @param {string} text
   */
  set text(text) {
    this.node.text = text
  }

  /**
   * @returns {string}
   */
  get text() {
    return this.node.text
  }
}
