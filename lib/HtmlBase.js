import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-base-element
 */
export class HtmlBase extends HtmlElem
{
  /**
   * @param {string} href
   */
  set href(href) {
    this.node.href = href
  }

  /**
   * @returns {string}
   */
  get href() {
    return this.node.href
  }

  /**
   * @param {string} target
   */
  set target(target) {
    this.node.target = target
  }

  /**
   * @returns {string}
   */
  get target() {
    return this.node.target
  }
}
