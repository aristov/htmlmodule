import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-param-element
 */
export class HtmlParam extends HtmlElem
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

  /**
   * @param {string} value
   */
  set value(value) {
    this.node.value = value
  }

  /**
   * @returns {string}
   */
  get value() {
    return this.node.value
  }
}
