import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLFieldSetElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-fieldset-element
 */
export class HTMLFieldSet extends HTMLElementAssembler {
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
     * @returns {string}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {array.HTMLElementAssembler|*}
     */
    get elements() {
        return map.call(this.node.elements, node => this.getInstanceOf(node))
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
     * @returns {interface} HTMLFieldSetElement
     * @override
     */
    static get interface() {
        return HTMLFieldSetElement || super.interface
    }
}

/**
 * @alias HTMLFieldSet
 */
export { HTMLFieldSet as FieldSet }

/**
 * @param {*} [init]
 * @returns {HTMLFieldSet}
 */
export function fieldset(init) {
    return new HTMLFieldSet(init)
}

HTMLFieldSet.register()
