import { HTMLElementAssembler } from './element'
import { Label } from './label'
import { Form } from './form'

const { map } = Array.prototype
const { HTMLInputElement } = window

export class Input extends HTMLElementAssembler {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
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
     * @param {String} error
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
     * @param {Number} n
     */
    stepDown(n) {
        this.node.stepDown()
    }

    /**
     * @param {Number} n
     */
    stepUp(n) {
        this.node.stepUp()
    }

    /**
     * @param {String} accept
     */
    set accept(accept) {
        this.node.accept = accept
    }

    /**
     * @returns {String}
     */
    get accept() {
        return this.node.accept
    }

    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} defaultChecked
     */
    set defaultChecked(defaultChecked) {
        this.node.defaultChecked = defaultChecked
    }

    /**
     * @returns {Boolean}
     */
    get defaultChecked() {
        return this.node.defaultChecked
    }

    /**
     * @param {Boolean} checked
     */
    set checked(checked) {
        this.node.checked = checked
    }

    /**
     * @returns {Boolean}
     */
    get checked() {
        return this.node.checked
    }

    /**
     * @param {String} dirName
     */
    set dirName(dirName) {
        this.node.dirName = dirName
    }

    /**
     * @returns {String}
     */
    get dirName() {
        return this.node.dirName
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, Form)
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
     * @param {String} formAction
     */
    set formAction(formAction) {
        this.node.formAction = formAction
    }

    /**
     * @returns {String}
     */
    get formAction() {
        return this.node.formAction
    }

    /**
     * @param {String} formEnctype
     */
    set formEnctype(formEnctype) {
        this.node.formEnctype = formEnctype
    }

    /**
     * @returns {String}
     */
    get formEnctype() {
        return this.node.formEnctype
    }

    /**
     * @param {String} formMethod
     */
    set formMethod(formMethod) {
        this.node.formMethod = formMethod
    }

    /**
     * @returns {String}
     */
    get formMethod() {
        return this.node.formMethod
    }

    /**
     * @param {Boolean} formNoValidate
     */
    set formNoValidate(formNoValidate) {
        this.node.formNoValidate = formNoValidate
    }

    /**
     * @returns {Boolean}
     */
    get formNoValidate() {
        return this.node.formNoValidate
    }

    /**
     * @param {String} formTarget
     */
    set formTarget(formTarget) {
        this.node.formTarget = formTarget
    }

    /**
     * @returns {String}
     */
    get formTarget() {
        return this.node.formTarget
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {Boolean} indeterminate
     */
    set indeterminate(indeterminate) {
        this.node.indeterminate = indeterminate
    }

    /**
     * @returns {Boolean}
     */
    get indeterminate() {
        return this.node.indeterminate
    }

    /**
     * @param {String} inputMode
     */
    set inputMode(inputMode) {
        this.node.inputMode = inputMode
    }

    /**
     * @returns {String}
     */
    get inputMode() {
        return this.node.inputMode
    }

    /**
     * @returns {HTMLElementAssembler|null}
     */
    get list() {
        return this.getInstanceOf(this.node.list, HTMLElementAssembler)
    }

    /**
     * @param {String} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {String}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {Number} maxLength
     */
    set maxLength(maxLength) {
        this.node.maxLength = maxLength
    }

    /**
     * @returns {Number}
     */
    get maxLength() {
        return this.node.maxLength
    }

    /**
     * @param {String} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {String}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {Number} minLength
     */
    set minLength(minLength) {
        this.node.minLength = minLength
    }

    /**
     * @returns {Number}
     */
    get minLength() {
        return this.node.minLength
    }

    /**
     * @param {Boolean} multiple
     */
    set multiple(multiple) {
        this.node.multiple = multiple
    }

    /**
     * @returns {Boolean}
     */
    get multiple() {
        return this.node.multiple
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} pattern
     */
    set pattern(pattern) {
        this.node.pattern = pattern
    }

    /**
     * @returns {String}
     */
    get pattern() {
        return this.node.pattern
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.node.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.node.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.node.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} size
     */
    set size(size) {
        this.node.size = size
    }

    /**
     * @returns {Number}
     */
    get size() {
        return this.node.size
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} step
     */
    set step(step) {
        this.node.step = step
    }

    /**
     * @returns {String}
     */
    get step() {
        return this.node.step
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} defaultValue
     */
    set defaultValue(defaultValue) {
        this.node.defaultValue = defaultValue
    }

    /**
     * @returns {String}
     */
    get defaultValue() {
        return this.node.defaultValue
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
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
     * @param {Number} valueAsNumber
     */
    set valueAsNumber(valueAsNumber) {
        this.node.valueAsNumber = valueAsNumber
    }

    /**
     * @returns {Number}
     */
    get valueAsNumber() {
        return this.node.valueAsNumber
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @returns {Boolean}
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
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, Label)
        })
    }

    /**
     * @param {Number} selectionStart
     */
    set selectionStart(selectionStart) {
        this.node.selectionStart = selectionStart
    }

    /**
     * @returns {Number}
     */
    get selectionStart() {
        return this.node.selectionStart
    }

    /**
     * @param {Number} selectionEnd
     */
    set selectionEnd(selectionEnd) {
        this.node.selectionEnd = selectionEnd
    }

    /**
     * @returns {Number}
     */
    get selectionEnd() {
        return this.node.selectionEnd
    }

    /**
     * @param {String} selectionDirection
     */
    set selectionDirection(selectionDirection) {
        this.node.selectionDirection = selectionDirection
    }

    /**
     * @returns {String}
     */
    get selectionDirection() {
        return this.node.selectionDirection
    }

    /**
     * @returns {window.HTMLInputElement}
     */
    static get interface() {
        return HTMLInputElement
    }
}

/**
 * @param {*} [init]
 * @returns {Input}
 */
export function input(init) {
    return new Input(init)
}

Input.register()
