import { HTMLElementAssembler } from './HTMLElementAssembler'

const { generateId } = HTMLElementAssembler
const { HTMLLabelElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-label-element
 */
export class HTMLLabel extends HTMLElementAssembler {
    /**
     * @param {*} control
     */
    set control(control) {
        this.htmlFor = control.id || (control.id = generateId.call(control.constructor))
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
     * @override
     */
    static get interface() {
        return HTMLLabelElement || super.interface
    }
}

/**
 * @alias HTMLLabel
 */
export { HTMLLabel as Label }

/**
 * @param {*} [init]
 * @returns {HTMLLabel}
 */
export function label(init) {
    return new HTMLLabel(init)
}

HTMLLabel.register()
