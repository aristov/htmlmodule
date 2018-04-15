import { HTMLElementAssembler } from './element'
import { Form } from './form'
import { Label } from './label'

const { map } = Array.prototype
const { HTMLOutputElement } = window

export class Output extends HTMLElementAssembler {
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
     * @param {String} htmlFor
     */
    set htmlFor(htmlFor) {
        this.node.htmlFor = htmlFor
    }

    /**
     * @returns {String}
     */
    get htmlFor() {
        return this.node.htmlFor
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, Form)
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
     * @returns {window.HTMLOutputElement}
     */
    static get interface() {
        return HTMLOutputElement
    }
}

/**
 * @param {*} [init]
 * @returns {Output}
 */
export function output(...init) {
    return new Output(...init)
}
