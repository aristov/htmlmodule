import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLPreElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-pre-element
 */
export class HTMLPre extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLPreElement
     * @override
     */
    static get interface() {
        return HTMLPreElement || super.interface
    }
}

/**
 * @alias HTMLPre
 */
export { HTMLPre as Pre }

/**
 * @param {*} [init]
 * @returns {HTMLPre}
 */
export function pre(init) {
    return new HTMLPre(init)
}

HTMLPre.register()
