import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLHeadElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-head-element
 */
export class HTMLHead extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHeadElement
     * @override
     */
    static get interface() {
        return HTMLHeadElement || super.interface
    }
}

/**
 * @alias HTMLHead
 */
export { HTMLHead as Head }

/**
 * @param {*} [init]
 * @returns {HTMLHead}
 */
export function head(init) {
    return new HTMLHead(init)
}

HTMLHead.register()
