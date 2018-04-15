import { HTMLElementAssembler } from './element'
import { Form } from './form'

const { map } = Array.prototype
const { HTMLFieldSetElement } = window

export class FieldSet extends HTMLElementAssembler {
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
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
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
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {(HTMLElementAssembler|*)[]}
     */
    get elements() {
        return map.call(this.node.elements, node => {
            return this.getInstanceOf(node)
        })
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
     * @returns {window.HTMLFieldSetElement}
     */
    static get interface() {
        return HTMLFieldSetElement
    }
}

/**
 * @param {*} [init]
 * @returns {FieldSet}
 */
export function fieldset(...init) {
    return new FieldSet(...init)
}
