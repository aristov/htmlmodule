import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLQuoteElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-blockquote-element
 */
export class HTMLBlockQuote extends HTMLElementAssembler {
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
 * @alias HTMLBlockQuote
 */
export { HTMLBlockQuote as BlockQuote }

/**
 * @param {*} [init]
 * @returns {HTMLBlockQuote}
 */
export function blockquote(init) {
    return new HTMLBlockQuote(init)
}

HTMLBlockQuote.register()
