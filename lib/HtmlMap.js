import { HtmlElem } from './HtmlElem.js'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-map-element
 */
export class HtmlMap extends HtmlElem
{
  /**
   * @param {string} name
   */
  set name(name) {
    this.node.name = name
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.node.name
  }
}
