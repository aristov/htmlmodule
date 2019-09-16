import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLQuoteElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-q-element
 */
export class HTMLQ extends HTMLElementAssembler {
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
 * @alias HTMLQ
 */
export { HTMLQ as Q }

/**
 * @param {*} [init]
 * @returns {HTMLQ}
 */
export function q(init) {
    return new HTMLQ(init)
}

HTMLQ.register()
