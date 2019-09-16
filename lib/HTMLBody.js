import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLBodyElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-body-element
 */
export class HTMLBody extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLBodyElement
     * @override
     */
    static get interface() {
        return HTMLBodyElement || super.interface
    }
}

/**
 * @alias HTMLBody
 */
export { HTMLBody as Body }

/**
 * @param {*} [init]
 * @returns {HTMLBody}
 */
export function body(init) {
    return new HTMLBody(init)
}

HTMLBody.register()
