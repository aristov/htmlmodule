import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'
import { HtmlLabel } from './HtmlLabel'
import { HtmlOption } from './HtmlOption'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-select-element
 */
export class HtmlSelect extends HtmlElem
{
  /**
   * @param {{}} init
   */
  assign(init) {
    if(init.hasOwnProperty('multiple')) {
      this.multiple = init.multiple
      delete init.multiple
    }
    super.assign(init)
  }

  /**
   * @param {Option|HTMLOptionElement|OptGroup|HTMLOptGroupElement} element
   * @param {HtmlElem|HTMLElement|number} [before=null]
   */
  add(element, before = null) {
    this.node.add(element.node || element, before.node || before)
  }

  /**
   * @returns {boolean}
   */
  checkValidity() {
    return this.node.checkValidity()
  }

  /**
   * @param {number} index
   * @returns {HtmlOption|null}
   */
  item(index) {
    return HtmlOption.get(this.node.item(index))
  }

  /**
   * @param {string} name
   * @returns {HtmlOption|null}
   */
  namedItem(name) {
    return HtmlOption.get(this.node.namedItem(name))
  }

  /**
   * @param {number} [index]
   */
  remove(index) {
    this.node.remove(index)
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
   * @param {boolean} multiple
   */
  set multiple(multiple) {
    this.node.multiple = multiple
  }

  /**
   * @returns {boolean}
   */
  get multiple() {
    return this.node.multiple
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
   * @param {number} size
   */
  set size(size) {
    this.node.size = size
  }

  /**
   * @returns {number}
   */
  get size() {
    return this.node.size
  }

  /**
   * @returns {string}
   */
  get type() {
    return this.node.type
  }

  /**
   * @param {array.HtmlOption} options
   */
  set options(options) {
    this.children = options
  }

  /**
   * @returns {array.HtmlOption}
   */
  get options() {
    return map.call(this.node.options, option => {
      return HtmlOption.get(option)
    })
  }

  /**
   * @returns {number}
   */
  get length() {
    return this.node.length
  }

  /**
   * @returns {array.HtmlOption}
   */
  get selectedOptions() {
    return map.call(this.node.selectedOptions, option => {
      return HtmlOption.get(option)
    })
  }

  /**
   * @param {number} selectedIndex
   */
  set selectedIndex(selectedIndex) {
    this.node.selectedIndex = selectedIndex
  }

  /**
   * @returns {number}
   */
  get selectedIndex() {
    return this.node.selectedIndex
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
