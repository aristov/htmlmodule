import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLBRElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-br-element
 */
export class HTMLBr extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLBRElement
     * @override
     */
    static get interface() {
        return HTMLBRElement || super.interface
    }
}

/**
 * @alias HTMLBr
 */
export { HTMLBr as Br }

/**
 * @param {*} [init]
 * @returns {HTMLBr}
 */
export function br(init) {
    return new HTMLBr(init)
}

HTMLBr.register()
