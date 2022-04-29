import { DomFragment } from './DomFragment'
import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-template-element
 */
export class HtmlTemplate extends HtmlElem
{
  /**
   * @returns {DomFragment}
   */
  get content() {
    return DomFragment.get(this.node.content)
  }
}
