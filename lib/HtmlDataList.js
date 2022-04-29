import { HtmlElem } from './HtmlElem'
import { HtmlOption } from './HtmlOption'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-datalist-element
 */
export class HtmlDataList extends HtmlElem
{
  /**
   * @returns {array.HtmlOption}
   */
  get options() {
    return map.call(this.node.options, option => {
      return HtmlOption.get(option)
    })
  }
}
