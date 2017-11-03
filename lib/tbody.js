import { HTMLElementAssembler } from './element'

const { HTMLTableSectionElement } = window

export class TBody extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableSectionElement}
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}

/**
 * @param {*} [init]
 * @returns {TBody}
 */
export function tbody(...init) {
    return new TBody(...init)
}
