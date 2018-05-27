import { HTMLElementAssembler } from './element'

const { HTMLLabelElement } = window

export class Label extends HTMLElementAssembler {
    /**
     * @param {*} control
     */
    set control(control) {
        this.htmlFor = control.id || (control.id = HTMLElementAssembler.generateId())
    }

    /**
     * @returns {Button|Input|Meter|Output|Progress|Select|TextArea|null}
     */
    get control() {
        return this.getInstanceOf(this.node.control)
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
    }

    /**
     * @param {string} htmlFor
     */
    set htmlFor(htmlFor) {
        this.node.htmlFor = htmlFor
    }

    /**
     * @returns {string}
     */
    get htmlFor() {
        return this.node.htmlFor
    }

    /**
     * @returns {interface} HTMLLabelElement
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
