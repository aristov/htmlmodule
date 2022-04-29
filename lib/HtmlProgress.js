import { HtmlElem } from './HtmlElem'
import { HtmlLabel } from './HtmlLabel'

const { map } = Array.prototype

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

  /**
   * @returns {HtmlLabel[]}
   */
  get labels() {
    return map.call(this.node.labels, node => HtmlLabel.get(node))
  }
}
