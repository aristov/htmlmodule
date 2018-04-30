import { HTMLElementAssembler } from './element'

const { HTMLPreElement } = window

export class Pre extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLPreElement}
     */
    static get interface() {
        return HTMLPreElement
    }
}

/**
 * @param {*} [init]
 * @returns {Pre}
 */
export function pre(init) {
    return new Pre(init)
}
