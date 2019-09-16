import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLSelectElement } = window
const { getNodeOf } = HTMLElementAssembler

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-select-element
 */
export class HTMLSelect extends HTMLElementAssembler {
    /**
     * @param {Option|HTMLOptionElement|OptGroup|HTMLOptGroupElement} element
     * @param {HTMLElementAssembler|HTMLElement|number} [before=null]
     */
    add(element, before = null) {
        this.node.add(getNodeOf(element), getNodeOf(before))
    }

    /**
     * @returns {boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @param {number} index
     * @returns {ElementAssembler|null}
     */
    item(index) {
        return this.getInstanceOf(this.node.item(index))
    }

    /**
     * @param {string} name
     * @returns {Option|HTMLElementAssembler|null}
     */
    namedItem(name) {
        return this.getInstanceOf(this.node.namedItem(name))
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
     * @returns {Form|HTMLElementAssembler|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
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
     * @returns {array.HTMLOption|array.HTMLElementAssembler}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstanceOf(option)
        })
    }

    /**
     * @returns {number}
     */
    get length() {
        return this.node.length
    }

    /**
     * @returns {array.HTMLOption|array.HTMLElementAssembler}
     */
    get selectedOptions() {
        return map.call(this.node.selectedOptions, option => {
            return this.getInstanceOf(option)
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
     * @returns {array.Label|array.HTMLElementAssembler}
     */
    get labels() {
        return map.call(this.node.labels, node => this.getInstanceOf(node))
    }

    /**
     * @returns {interface} HTMLSelectElement
     * @override
     */
    static get interface() {
        return HTMLSelectElement || super.interface
    }
}

/**
 * @alias HTMLSelect
 */
export { HTMLSelect as Select }

/**
 * @param {*} [init]
 * @returns {HTMLSelect}
 */
export function select(init) {
    return new HTMLSelect(init)
}

HTMLSelect.register()
