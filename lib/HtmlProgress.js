import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-progress-element
 */
export class HtmlProgress extends HtmlElem
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

  /**
   * @param {number} max
   */
  set max(max) {
    this.node.max = max
  }

  /**
   * @returns {number}
   */
  get max() {
    return this.node.max
  }

  /**
   * @returns {number}
   */
  get position() {
    return this.node.position
  }
}
