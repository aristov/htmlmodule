import { HTMLElementAssembler } from './element'

const { HTMLTableSectionElement } = window

export class TFoot extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableSectionElement}
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}

/**
 * @param {*} [init]
 * @returns {TFoot}
 */
export function tfoot(...init) {
    return new TFoot(...init)
}
