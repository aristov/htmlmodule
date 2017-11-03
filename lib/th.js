import { HTMLElementAssembler } from './element'

const { HTMLTableCellElement } = window

export class Th extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableCellElement}
     */
    static get interface() {
        return HTMLTableCellElement
    }
}

/**
 * @param {*} [init]
 * @returns {Th}
 */
export function th(...init) {
    return new Th(...init)
}
