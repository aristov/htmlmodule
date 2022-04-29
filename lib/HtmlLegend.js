import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-legend-element
 */
export class HtmlLegend extends HtmlElem
{
  /**
   * @returns {Form|null}
   */
  get form() {
    return HtmlForm.get(this.node.form)
  }
}
