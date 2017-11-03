import { HTMLElementAssembler } from './element'

const { HTMLTableCellElement } = window

export class Td extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableCellElement}
     */
    static get interface() {
        return HTMLTableCellElement
    }
}

/**
 * @param {*} [init]
 * @returns {Td}
 */
export function td(...init) {
    return new Td(...init)
}
