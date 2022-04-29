import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-optgroup-element
 */
export class HtmlOptGroup extends HtmlElem
{
  /**
   * @param {boolean} disabled
   */
  set disabled(disabled) {
    this.node.disabled = disabled
  }

  /**
   * @returns {boolean}
   */
  get disabled() {
    return this.node.disabled
  }

  /**
   * @param {string} label
   */
  set label(label) {
    this.node.label = label
  }

  /**
   * @returns {string}
   */
  get label() {
    return this.node.label
  }
}
