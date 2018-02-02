import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

export class BlockQuote extends HTMLElementAssembler {
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
 * @returns {BlockQuote}
 */
export function blockquote(...init) {
    return new BlockQuote(...init)
}
