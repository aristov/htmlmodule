import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-blockquote-element
 */
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
        return HTMLQuoteElement || super.interface
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
