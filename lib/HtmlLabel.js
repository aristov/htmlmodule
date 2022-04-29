import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-label-element
 */
export class HtmlLabel extends HtmlElem
{
  /**
   * @param {HtmlElem} control
   */
  set control(control) {
    this.htmlFor = control.id || (control.id = control.generateId())
  }

  /**
   * @returns {Button|Input|Meter|Output|Progress|Select|TextArea|null}
   */
  get control() {
    return HtmlElem.get(this.node.control)
  }

  /**
   * @returns {Form|null}
   */
  get form() {
    return HtmlForm.get(this.node.form)
  }

  /**
   * @param {string} htmlFor
   */
  set htmlFor(htmlFor) {
    this.node.htmlFor = htmlFor
  }

  /**
   * @returns {string}
   */
  get htmlFor() {
    return this.node.htmlFor
  }
}
