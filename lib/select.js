import { HTMLElementAssembler } from './element'
import { Form } from './form'
import { Label } from './label'
import { OptGroup } from './optgroup'
import { HTMLOption } from './option'

const { map } = Array.prototype
const { HTMLSelectElement } = window

export class Select extends HTMLElementAssembler {
    /**
     * @param {HTMLOption|HTMLOptionElement|OptGroup|HTMLOptGroupElement} element
     * @param {HTMLElementAssembler|HTMLElement|Number} [before=null]
     */
    add(element, before = null) {
        if(element instanceof HTMLOption || element instanceof OptGroup) {
            element = element.node
        }
        if(before instanceof HTMLElementAssembler) {
            before = before.node
        }
        this.node.add(element, before)
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
     * @returns {HTMLOption|null}
     */
    namedItem(name) {
        return this.getInstanceOf(this.node.namedItem(name), HTMLOption)
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
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, Form)
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
     * @returns {HTMLOption[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstanceOf(option, HTMLOption)
        })
    }

    /**
     * @returns {Number}
     */
    get length() {
        return this.node.length
    }

    /**
     * @returns {HTMLOption[]}
     */
    get selectedOptions() {
        return map.call(this.node.selectedOptions, option => {
            return this.getInstanceOf(option, HTMLOption)
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
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, Label)
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
