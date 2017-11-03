import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

export class BlockQuote extends HTMLElementAssembler {
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
