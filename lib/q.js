import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

export class Q extends HTMLElementAssembler {
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
