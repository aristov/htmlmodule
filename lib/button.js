import { HTMLElementAssembler } from './element'

const { HTMLButtonElement } = window

export class Button extends HTMLElementAssembler {
    checkValidity() {
        return this.node.checkValidity
    }

    reportValidity() {
        return this.node.reportValidity
    }

    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    get autofocus() {
        return this.node.autofocus
    }

    set disabled(disabled) {
        this.node.disabled = disabled
    }

    get disabled() {
        return this.node.disabled
    }

    get form() {
        return this.node.form
    }

    set formAction(formAction) {
        this.node.formAction = formAction
    }

    get formAction() {
        return this.node.formAction
    }

    set formEnctype(formEnctype) {
        this.node.formEnctype = formEnctype
    }

    get formEnctype() {
        return this.node.formEnctype
    }

    set formMethod(formMethod) {
        this.node.formMethod = formMethod
    }

    get formMethod() {
        return this.node.formMethod
    }

    set formNoValidate(formNoValidate) {
        this.node.formNoValidate = formNoValidate
    }

    get formNoValidate() {
        return this.node.formNoValidate
    }

    set formTarget(formTarget) {
        this.node.formTarget = formTarget
    }

    get formTarget() {
        return this.node.formTarget
    }

    set name(name) {
        this.node.name = name
    }

    get name() {
        return this.node.name
    }

    set type(type) {
        this.node.type = type
    }

    get type() {
        return this.node.type
    }

    set value(value) {
        this.node.value = value
    }

    get value() {
        return this.node.value
    }

    get willValidate() {
        return this.node.willValidate
    }

    get validity() {
        return this.node.validity
    }

    get validationMessage() {
        return this.node.validationMessage
    }

    get labels() {
        return this.node.labels
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
