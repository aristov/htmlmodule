import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLTextAreaElement } = window

export class TextArea extends HTMLElementAssembler {
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
     * @param {Number} cols
     */
    set cols(cols) {
        this.node.cols = cols
    }

    /**
     * @returns {Number}
     */
    get cols() {
        return this.node.cols
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
     * @returns {*}
     */
    get form() {
        return this.node.form
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
     * @param {Number} rows
     */
    set rows(rows) {
        this.node.rows = rows
    }

    /**
     * @returns {Number}
     */
    get rows() {
        return this.node.rows
    }

    /**
     * @param {String} wrap
     */
    set wrap(wrap) {
        this.node.wrap = wrap
    }

    /**
     * @returns {String}
     */
    get wrap() {
        return this.node.wrap
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
     * @returns {Number}
     */
    get textLength() {
        return this.node.textLength
    }
    
    /**
     * @returns {Boolean}
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
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label|HTMLElementAssembler)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node)
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
     * @returns {window.HTMLTextAreaElement}
     */
    static get interface() {
        return HTMLTextAreaElement
    }
}

/**
 * @param {*} [init]
 * @returns {TextArea}
 */
export function textarea(init) {
    return new TextArea(init)
}

TextArea.register()
