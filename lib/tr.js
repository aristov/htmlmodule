import { HTMLElementAssembler } from './element'

const { HTMLTableRowElement } = window

export class Tr extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableRowElement}
     */
    static get interface() {
        return HTMLTableRowElement
    }
}

/**
 * @param {*} [init]
 * @returns {Tr}
 */
export function tr(...init) {
    return new Tr(...init)
}
