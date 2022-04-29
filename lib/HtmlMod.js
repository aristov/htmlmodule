import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlmodelement
 * @abstract
 */
export class HtmlMod extends HtmlElem
{
  /**
   * @param {string} cite
   */
  set cite(cite) {
    this.node.cite = cite
  }

  /**
   * @returns {string}
   */
  get cite() {
    return this.node.cite
  }

  /**
   * @param {string} dateTime
   */
  set dateTime(dateTime) {
    this.node.dateTime = dateTime
  }

  /**
   * @returns {string}
   */
  get dateTime() {
    return this.node.dateTime
  }

  /**
   * @returns {constructor} HtmlMod
   */
  static get superAssembler() {
    return HtmlMod
  }
}
