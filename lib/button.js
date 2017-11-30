import { HTMLElementAssembler } from './element'
import { Form } from './form'
import { Label } from './label'

const { map } = Array.prototype
const { HTMLButtonElement } = window

export class Button extends HTMLElementAssembler {
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
     * @returns {Form}
     */
    get form() {
        return this.getInstance(this.node.form, Form)
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
        const handler = node => this.getInstance(node, Label)
        return map.call(this.node.labels, handler)
    }

    /**
     * @returns {window.HTMLButtonElement}
     */
    static get interface() {
        return HTMLButtonElement
    }
}

/**
 * @param {*} [init]
 * @returns {Button}
 */
export function button(init) {
    return new Button(init)
}
