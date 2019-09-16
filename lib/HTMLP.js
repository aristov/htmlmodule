import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLParagraphElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-p-element
 */
export class HTMLP extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLParagraphElement
     * @override
     */
    static get interface() {
        return HTMLParagraphElement || super.interface
    }
}

/**
 * @alias HTMLP
 */
export { HTMLP as P }

/**
 * @param {*} [init]
 * @returns {HTMLP}
 */
export function p(init) {
    return new HTMLP(init)
}

HTMLP.register()
