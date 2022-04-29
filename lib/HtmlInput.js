import { HtmlDataList } from './HtmlDataList'
import { HtmlElem } from './HtmlElem'
import { HtmlForm } from './HtmlForm'
import { HtmlLabel } from './HtmlLabel'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-input-element
 */
export class HtmlInput extends HtmlElem
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
   * @param {number} n
   */
  stepDown(n) {
    this.node.stepDown()
  }

  /**
   * @param {number} n
   */
  stepUp(n) {
    this.node.stepUp()
  }

  /**
   * @param {string} accept
   */
  set accept(accept) {
    this.node.accept = accept
  }

  /**
   * @returns {string}
   */
  get accept() {
    return this.node.accept
  }

  /**
   * @param {string} alt
   */
  set alt(alt) {
    this.node.alt = alt
  }

  /**
   * @returns {string}
   */
  get alt() {
    return this.node.alt
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
   * @param {boolean} defaultChecked
   */
  set defaultChecked(defaultChecked) {
    this.node.defaultChecked = defaultChecked
  }

  /**
   * @returns {boolean}
   */
  get defaultChecked() {
    return this.node.defaultChecked
  }

  /**
   * @param {boolean} checked
   */
  set checked(checked) {
    this.node.checked = checked
  }

  /**
   * @returns {boolean}
   */
  get checked() {
    return this.node.checked
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
   * @returns {HtmlForm|null}
   */
  get form() {
    return HtmlForm.get(this.node.form)
  }

  /**
   * @param {*} files
   */
  set files(files) {
    this.node.files = files
  }

  /**
   * @returns {*}
   */
  get files() {
    return this.node.files
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
   * @param {number} height
   */
  set height(height) {
    this.node.height = height
  }

  /**
   * @returns {number}
   */
  get height() {
    return this.node.height
  }

  /**
   * @param {boolean} indeterminate
   */
  set indeterminate(indeterminate) {
    this.node.indeterminate = indeterminate
  }

  /**
   * @returns {boolean}
   */
  get indeterminate() {
    return this.node.indeterminate
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
   * @param {HtmlDataList|null} list
   */
  set list(list) {
    if(!list) {
      this.removeAttr('list')
      return
    }
    if(!list.id) {
      list.id = list.generateId()
    }
    this.setAttr('list', list.id)
    if(this.doc.contains(list)) {
      return
    }
    if(this.doc.contains(this)) {
      this.after(list)
    }
    else setTimeout(() => this.after(list))
  }

  /**
   * @returns {HtmlDataList|null}
   */
  get list() {
    return HtmlDataList.get(this.node.list)
  }

  /**
   * @param {string} max
   */
  set max(max) {
    this.node.max = max
  }

  /**
   * @returns {string}
   */
  get max() {
    return this.node.max
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
   * @param {string} min
   */
  set min(min) {
    this.node.min = min
  }

  /**
   * @returns {string}
   */
  get min() {
    return this.node.min
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
   * @param {string} pattern
   */
  set pattern(pattern) {
    this.node.pattern = pattern
  }

  /**
   * @returns {string}
   */
  get pattern() {
    return this.node.pattern
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
   * @param {string} src
   */
  set src(src) {
    this.node.src = src
  }

  /**
   * @returns {string}
   */
  get src() {
    return this.node.src
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
   * @param {Date} valueAsDate
   */
  set valueAsDate(valueAsDate) {
    this.node.valueAsDate = valueAsDate
  }

  /**
   * @returns {Date}
   */
  get valueAsDate() {
    return this.node.valueAsDate
  }

  /**
   * @param {number} valueAsNumber
   */
  set valueAsNumber(valueAsNumber) {
    this.node.valueAsNumber = valueAsNumber
  }

  /**
   * @returns {number}
   */
  get valueAsNumber() {
    return this.node.valueAsNumber
  }

  /**
   * @param {number} width
   */
  set width(width) {
    this.node.width = width
  }

  /**
   * @returns {number}
   */
  get width() {
    return this.node.width
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
   * @returns {array.Label}
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
