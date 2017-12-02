import { HTMLElementAssembler } from './element'

const { HTMLTableCellElement } = window

export class Th extends HTMLElementAssembler {
    /**
     * @param {String} scope
     */
    set scope(scope) {
        this.node.scope = scope
    }

    /**
     * @returns {String}
     */
    get scope() {
        return this.node.scope
    }

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
