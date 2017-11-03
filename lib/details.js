import { HTMLElementAssembler } from './element'

const { HTMLDetailsElement } = window

export class Details extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLDetailsElement}
     */
    static get interface() {
        return HTMLDetailsElement
    }
}

/**
 * @param {*} [init]
 * @returns {Details}
 */
export function details(...init) {
    return new Details(...init)
}
