import { HTMLElementAssembler } from './element'

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
        return this.getInstanceOf(this.node.control)
    }

    /**
     * @returns {Form|HTMLElementAssembler|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
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

Label.register()
