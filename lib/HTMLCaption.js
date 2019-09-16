import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTableCaptionElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-caption-element
 */
export class HTMLCaption extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLTableCaptionElement
     * @override
     */
    static get interface() {
        return HTMLTableCaptionElement || super.interface
    }
}

/**
 * @alias HTMLCaption
 */
export { HTMLCaption as Caption }

/**
 * @param {*} [init]
 * @returns {HTMLCaption}
 */
export function caption(init) {
    return new HTMLCaption(init)
}

HTMLCaption.register()
