import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

export class BlockQuote extends HTMLElementAssembler {
    /**
     * @param {string} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {string}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {interface} HTMLQuoteElement
     * @override
     */
    static get interface() {
        return HTMLQuoteElement
    }
}

/**
 * @param {*} [init]
 * @returns {BlockQuote}
 */
export function blockquote(init) {
    return new BlockQuote(init)
}

BlockQuote.register()
