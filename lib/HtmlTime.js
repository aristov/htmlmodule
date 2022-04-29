import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-time-element
 */
export class HtmlTime extends HtmlElem
{
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
}
