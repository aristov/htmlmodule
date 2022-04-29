import { DomDoc } from './DomDoc'
import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-object-element
 */
export class HtmlObject extends HtmlElem
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
   * @param {string} data
   */
  set data(data) {
    this.node.data = data
  }

  /**
   * @returns {string}
   */
  get data() {
    return this.node.data
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
   * @param {boolean} typeMustMatch
   */
  set typeMustMatch(typeMustMatch) {
    this.node.typeMustMatch = typeMustMatch
  }

  /**
   * @returns {boolean}
   */
  get typeMustMatch() {
    return this.node.typeMustMatch
  }

  /**
   * @param {string} useMap
   */
  set useMap(useMap) {
    this.node.useMap = useMap
  }

  /**
   * @returns {string}
   */
  get useMap() {
    return this.node.useMap
  }

  /**
   * @param {string} width
   */
  set width(width) {
    this.node.width = width
  }

  /**
   * @returns {string}
   */
  get width() {
    return this.node.width
  }

  /**
   * @param {string} height
   */
  set height(height) {
    this.node.height = height
  }

  /**
   * @returns {string}
   */
  get height() {
    return this.node.height
  }

  /**
   * @returns {Form|null}
   */
  get form() {
    return HtmlForm.get(this.node.form)
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
   * @returns {DomDoc}
   */
  get contentDocument() {
    return DomDoc.get(this.node.contentDocument)
  }
}
