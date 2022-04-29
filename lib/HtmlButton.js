import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'
import { HtmlLabel } from './HtmlLabel'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-button-element
 */
export class HtmlButton extends HtmlElem
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
   * @param {boolean} autofocus
   */
  set autofocus(autofocus) {
    this.node.autofocus = autofocus
  }

  /**
   * @returns {boolean}
   */
  get autofocus() {
    return this.node.autofocus
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
   * @param {string} formAction
   */
  set formAction(formAction) {
    this.node.formAction = formAction
  }

  /**
   * @returns {string}
   */
  get formAction() {
    return this.node.formAction
  }

  /**
   * @param {string} formEnctype
   */
  set formEnctype(formEnctype) {
    this.node.formEnctype = formEnctype
  }

  /**
   * @returns {string}
   */
  get formEnctype() {
    return this.node.formEnctype
  }

  /**
   * @param {string} formMethod
   */
  set formMethod(formMethod) {
    this.node.formMethod = formMethod
  }

  /**
   * @returns {string}
   */
  get formMethod() {
    return this.node.formMethod
  }

  /**
   * @param {boolean} formNoValidate
   */
  set formNoValidate(formNoValidate) {
    this.node.formNoValidate = formNoValidate
  }

  /**
   * @returns {boolean}
   */
  get formNoValidate() {
    return this.node.formNoValidate
  }

  /**
   * @param {string} formTarget
   */
  set formTarget(formTarget) {
    this.node.formTarget = formTarget
  }

  /**
   * @returns {string}
   */
  get formTarget() {
    return this.node.formTarget
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
   * @param {string} type
   */
  set type(type) {
    this.node.type = type
  }

  /**
   * @returns {string}
   */
  get type() {
    return this.node.type
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
