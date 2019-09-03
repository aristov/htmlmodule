import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLParagraphElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-p-element
 */
export class P extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLParagraphElement
     * @override
     */
    static get interface() {
        return HTMLParagraphElement || super.interface
    }
}

export const HTMLP = P

/**
 * @param {*} [init]
 * @returns {P}
 */
export function p(init) {
    return new P(init)
}

P.register()
