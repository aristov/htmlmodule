import { HTMLElementAssembler } from './element'

const { HTMLParagraphElement } = window

export class P extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLParagraphElement}
     */
    static get interface() {
        return HTMLParagraphElement
    }
}

/**
 * @param {*} [init]
 * @returns {P}
 */
export function p(init) {
    return new P(init)
}
