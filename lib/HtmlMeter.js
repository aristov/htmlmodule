import { HtmlElem } from './HtmlElem'
import { HtmlLabel } from './HtmlLabel'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-meter-element
 */
export class HtmlMeter extends HtmlElem
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
   * @param {number} min
   */
  set min(min) {
    this.node.min = min
  }

  /**
   * @returns {number}
   */
  get min() {
    return this.node.min
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
   * @param {number} low
   */
  set low(low) {
    this.node.low = low
  }

  /**
   * @returns {number}
   */
  get low() {
    return this.node.low
  }

  /**
   * @param {number} high
   */
  set high(high) {
    this.node.high = high
  }

  /**
   * @returns {number}
   */
  get high() {
    return this.node.high
  }

  /**
   * @param {number} optimum
   */
  set optimum(optimum) {
    this.node.optimum = optimum
  }

  /**
   * @returns {number}
   */
  get optimum() {
    return this.node.optimum
  }

  /**
   * @returns {HtmlLabel[]}
   */
  get labels() {
    return map.call(this.node.labels, node => HtmlLabel.get(node))
  }
}
