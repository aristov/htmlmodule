import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLHtmlElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-html-element
 */
export class HTMLHtml extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHtmlElement
     * @override
     */
    static get interface() {
        return HTMLHtmlElement || super.interface
    }
}

/**
 * @alias HTMLHtml
 */
export { HTMLHtml as Html }

/**
 * @param {*} [init]
 * @returns {HTMLHtml}
 */
export function html(init) {
    return new HTMLHtml(init)
}

HTMLHtml.register()
