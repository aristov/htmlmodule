import { HTMLElementAssembler } from './element'
import { Form } from './form'

const { HTMLLegendElement } = window

export class Legend extends HTMLElementAssembler {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, Form)
    }

    /**
     * @returns {window.HTMLLegendElement}
     */
    static get interface() {
        return HTMLLegendElement
    }
}

/**
 * @param {*} [init]
 * @returns {Legend}
 */
export function legend(...init) {
    return new Legend(...init)
}
