import { HTMLElementAssembler } from './element'

const { HTMLTextAreaElement } = window

export class TextArea extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTextAreaElement}
     */
    static get interface() {
        return HTMLTextAreaElement
    }
}

/**
 * @param {*} [init]
 * @returns {TextArea}
 */
export function textarea(...init) {
    return new TextArea(...init)
}
