import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLSelectElement } = window
const { getNodeOf } = HTMLElementAssembler

export class Select extends HTMLElementAssembler {
    /**
     * @param {HTMLOption|HTMLOptionElement|OptGroup|HTMLOptGroupElement} element
     * @param {HTMLElementAssembler|HTMLElement|Number} [before=null]
     */
    add(element, before = null) {
        this.node.add(getNodeOf(element), getNodeOf(before))
    }

    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @param {Number} index
     * @returns {ElementAssembler|null}
     */
    item(index) {
        return this.getInstanceOf(this.node.item(index))
    }

    /**
     * @param {String} name
     * @returns {HTMLOption|HTMLElementAssembler|null}
     */
    namedItem(name) {
        return this.getInstanceOf(this.node.namedItem(name))
    }

    /**
     * @param {Number} [index]
     */
    remove(index) {
        this.node.remove(index)
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
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
     * @returns {Form|HTMLElementAssembler|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
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
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {(HTMLOption|HTMLElementAssembler)[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstanceOf(option)
        })
    }

    /**
     * @returns {Number}
     */
    get length() {
        return this.node.length
    }

    /**
     * @returns {(HTMLOption|HTMLElementAssembler)[]}
     */
    get selectedOptions() {
        return map.call(this.node.selectedOptions, option => {
            return this.getInstanceOf(option)
        })
    }

    /**
     * @param {Number} selectedIndex
     */
    set selectedIndex(selectedIndex) {
        this.node.selectedIndex = selectedIndex
    }

    /**
     * @returns {Number}
     */
    get selectedIndex() {
        return this.node.selectedIndex
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
     * @returns {(Label|HTMLElementAssembler)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @returns {window.HTMLSelectElement}
     */
    static get interface() {
        return HTMLSelectElement
    }
}

/**
 * @param {*} [init]
 * @returns {Select}
 */
export function select(init) {
    return new Select(init)
}

Select.register()
