import { HTMLElementAssembler } from './element'

const { HTMLDetailsElement } = window

export class Details extends HTMLElementAssembler {
    /**
     * @param {Boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {Boolean}
     */
    get open() {
        return this.node.open
    }

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
