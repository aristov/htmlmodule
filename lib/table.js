import { HTMLElementAssembler } from './element'

const { HTMLTableElement } = window

export class Table extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableElement}
     */
    static get interface() {
        return HTMLTableElement
    }
}

/**
 * @param {*} [init]
 * @returns {Table}
 */
export function table(init) {
    return new Table(init)
}
