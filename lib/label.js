import { HTMLElementAssembler } from './element'

const { HTMLLabelElement } = window

export class Label extends HTMLElementAssembler {
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
