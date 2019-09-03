import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLPreElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-pre-element
 */
export class Pre extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLPreElement
     * @override
     */
    static get interface() {
        return HTMLPreElement || super.interface
    }
}

export const HTMLPre = Pre

/**
 * @param {*} [init]
 * @returns {Pre}
 */
export function pre(init) {
    return new Pre(init)
}

Pre.register()
