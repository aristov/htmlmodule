import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

export class Q extends HTMLElementAssembler {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {window.HTMLQuoteElement}
     */
    static get interface() {
        return HTMLQuoteElement
    }
}

/**
 * @param {*} [init]
 * @returns {Q}
 */
export function q(...init) {
    return new Q(...init)
}
