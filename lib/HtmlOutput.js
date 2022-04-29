import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'
import { HtmlLabel } from './HtmlLabel'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-output-element
 */
export class HtmlOutput extends HtmlElem
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

  /**
   * @returns {HtmlForm|null}
   */
  get form() {
    return HtmlForm.get(this.node.form)
  }

  /**
   * @returns {string}
   */
  get type() {
    return this.node.type
  }

  /**
   * @param {string} defaultValue
   */
  set defaultValue(defaultValue) {
    this.node.defaultValue = defaultValue
  }

  /**
   * @returns {string}
   */
  get defaultValue() {
    return this.node.defaultValue
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

  /**
   * @returns {array.HtmlLabel}
   */
  get labels() {
    return map.call(this.node.labels, node => HtmlLabel.get(node))
  }
}
