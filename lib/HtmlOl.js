import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ol-element
 */
export class HtmlOl extends HtmlElem
{
  /**
   * @param {boolean} reversed
   */
  set reversed(reversed) {
    this.node.reversed = reversed
  }

  /**
   * @returns {boolean}
   */
  get reversed() {
    return this.node.reversed
  }

  /**
   * @param {number} start
   */
  set start(start) {
    this.node.start = start
  }

  /**
   * @returns {number}
   */
  get start() {
    return this.node.start
  }

  /**
   * @param {string} type
   */
  set type(type) {
    this.node.type = type
  }

  /**
   * @returns {string}
   */
  get type() {
    return this.node.type
  }
}
