import { HtmlElem } from './HTMLElementAssembler'

const { HTMLSpanElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-span-element
 */
export class HTMLSpan extends HtmlElem {
    /**
     * @returns {interface} HTMLSpanElement
     * @override
     */
    static get interface() {
        return HTMLSpanElement || super.interface
    }
}

/**
 * @alias HTMLSpan
 */
export { HTMLSpan as Span }

/**
 * @param {*} [init]
 * @returns {HTMLSpan}
 */
export function span(init) {
    return new HTMLSpan(init)
}

HTMLSpan.register()
