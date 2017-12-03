import { HTMLElementAssembler } from './element'
import { Form } from './form'

const { HTMLLabelElement } = window

export class Label extends HTMLElementAssembler {
    /**
     * @param control
     */
    set control(control) {
        this.htmlFor = control.id
    }

    /**
     * @returns {*}
     */
    get control() {
        return this.getInstance(this.node.control)
    }

    /**
     * @returns {Form|ElementAssembler|null}
     */
    get form() {
        return this.getInstance(this.node.form, Form)
    }

    /**
     * @param {*} htmlFor
     */
    set htmlFor(htmlFor) {
        this.node.htmlFor = htmlFor
    }

    /**
     * @returns {NodeAssembler|null}
     */
    get htmlFor() {
        return this.node.htmlFor
    }

    /**
     * @returns {window.HTMLLabelElement}
     */
    static get interface() {
        return HTMLLabelElement
    }
}

/**
 * @param {*} [init]
 * @returns {Label}
 */
export function label(init) {
    return new Label(init)
}
