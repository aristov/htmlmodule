import { HtmlElem } from './HtmlElem'
import { HtmlLabel } from './HtmlLabel'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-textarea-element
 */
export class HtmlTextArea extends HtmlElem
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
   * Select the input
   */
  select() {
    this.node.select()
  }

  /**
   * @param {string} error
   */
  setCustomValidity(error) {
    this.node.setCustomValidity(error)
  }

  /**
   * @param {*} args
   */
  setRangeText(...args) {
    this.node.setRangeText(...args)
  }

  /**
   * @param {*} args
   */
  setSelectionRange(...args) {
    this.node.setSelectionRange(...args)
  }

  /**
   * @param {string} autocomplete
   */
  set autocomplete(autocomplete) {
    this.node.autocomplete = autocomplete
  }

  /**
   * @returns {string}
   */
  get autocomplete() {
    return this.node.autocomplete
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
   * @param {number} cols
   */
  set cols(cols) {
    this.node.cols = cols
  }

  /**
   * @returns {number}
   */
  get cols() {
    return this.node.cols
  }

  /**
   * @param {string} dirName
   */
  set dirName(dirName) {
    this.node.dirName = dirName
  }

  /**
   * @returns {string}
   */
  get dirName() {
    return this.node.dirName
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
   * @returns {*}
   */
  get form() {
    return this.node.form
  }

  /**
   * @param {string} inputMode
   */
  set inputMode(inputMode) {
    this.node.inputMode = inputMode
  }

  /**
   * @returns {string}
   */
  get inputMode() {
    return this.node.inputMode
  }

  /**
   * @param {number} maxLength
   */
  set maxLength(maxLength) {
    this.node.maxLength = maxLength
  }

  /**
   * @returns {number}
   */
  get maxLength() {
    return this.node.maxLength
  }

  /**
   * @param {number} minLength
   */
  set minLength(minLength) {
    this.node.minLength = minLength
  }

  /**
   * @returns {number}
   */
  get minLength() {
    return this.node.minLength
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
   * @param {string} placeholder
   */
  set placeholder(placeholder) {
    this.node.placeholder = placeholder
  }

  /**
   * @returns {string}
   */
  get placeholder() {
    return this.node.placeholder
  }

  /**
   * @param {boolean} readOnly
   */
  set readOnly(readOnly) {
    this.node.readOnly = readOnly
  }

  /**
   * @returns {boolean}
   */
  get readOnly() {
    return this.node.readOnly
  }

  /**
   * @param {boolean} required
   */
  set required(required) {
    this.node.required = required
  }

  /**
   * @returns {boolean}
   */
  get required() {
    return this.node.required
  }

  /**
   * @param {number} rows
   */
  set rows(rows) {
    this.node.rows = rows
  }

  /**
   * @returns {number}
   */
  get rows() {
    return this.node.rows
  }

  /**
   * @param {string} wrap
   */
  set wrap(wrap) {
    this.node.wrap = wrap
  }

  /**
   * @returns {string}
   */
  get wrap() {
    return this.node.wrap
  }

  /**
   * @param {string} step
   */
  set step(step) {
    this.node.step = step
  }

  /**
   * @returns {string}
   */
  get step() {
    return this.node.step
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
   * @returns {number}
   */
  get textLength() {
    return this.node.textLength
  }

  /**
   * @returns {boolean}
   */
  get willValidate() {
    return this.node.willValidate
  }

  /**
   * @returns {*}
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
   * @returns {HtmlLabel[]}
   */
  get labels() {
    return map.call(this.node.labels, node => HtmlLabel.get(node))
  }

  /**
   * @param {number} selectionStart
   */
  set selectionStart(selectionStart) {
    this.node.selectionStart = selectionStart
  }

  /**
   * @returns {number}
   */
  get selectionStart() {
    return this.node.selectionStart
  }

  /**
   * @param {number} selectionEnd
   */
  set selectionEnd(selectionEnd) {
    this.node.selectionEnd = selectionEnd
  }

  /**
   * @returns {number}
   */
  get selectionEnd() {
    return this.node.selectionEnd
  }

  /**
   * @param {string} selectionDirection
   */
  set selectionDirection(selectionDirection) {
    this.node.selectionDirection = selectionDirection
  }

  /**
   * @returns {string}
   */
  get selectionDirection() {
    return this.node.selectionDirection
  }
}
