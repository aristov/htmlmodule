import { HTMLElementAssembler } from './element'

const { HTMLSpanElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-span-element
 */
export class Span extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLSpanElement
     * @override
     */
    static get interface() {
        return HTMLSpanElement
    }
}

/**
 * @param {*} [init]
 * @returns {Span}
 */
export function span(init) {
    return new Span(init)
}

Span.register()
