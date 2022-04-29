import { HtmlTableCell } from './HtmlTableCell'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-th-element
 */
export class HtmlTh extends HtmlTableCell
{
  /**
   * @param {string} scope
   */
  set scope(scope) {
    this.node.scope = scope
  }

  /**
   * @returns {string}
   */
  get scope() {
    return this.node.scope
  }

  /**
   * @param {string} abbr
   */
  set abbr(abbr) {
    this.node.abbr = abbr
  }

  /**
   * @returns {string}
   */
  get abbr() {
    return this.node.abbr
  }
}
