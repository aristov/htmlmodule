import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-fieldset-element
 */
export class HtmlFieldSet extends HtmlElem
{
  /**
   * @returns {boolean}
   */
  checkValidity() {
    return this.node.checkValidity()
  }

  /**
   * @returns {boolean}
   */
  reportValidity() {
    return this.node.reportValidity()
  }

  /**
   * @param {string} error
   */
  setCustomValidity(error) {
    this.node.setCustomValidity(error)
  }

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
   * @returns {HtmlForm|null}
   */
  get form() {
    return HtmlForm.get(this.node.form)
  }

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
   * @returns {string}
   */
  get type() {
    return this.node.type
  }

  /**
   * @returns {array.HtmlElem|*}
   */
  get elements() {
    return map.call(this.node.elements, node => HtmlElem.get(node))
  }

  /**
   * @returns {boolean}
   */
  get willValidate() {
    return this.node.willValidate
  }

  /**
   * @returns {ValidityState}
   */
  get validity() {
    return this.node.validity
  }

  /**
   * @returns {string}
   */
  get validationMessage() {
    return this.node.validationMessage
  }
}
