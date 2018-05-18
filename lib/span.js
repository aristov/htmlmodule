import { HTMLElementAssembler } from './element'

const { HTMLSpanElement } = window

export class Span extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLSpanElement}
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
