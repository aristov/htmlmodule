import { HTMLElementAssembler } from './element'

const { HTMLTableSectionElement } = window

export class THead extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableSectionElement}
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}

/**
 * @param {*} [init]
 * @returns {THead}
 */
export function thead(...init) {
    return new THead(...init)
}
