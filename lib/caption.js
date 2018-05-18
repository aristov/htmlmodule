import { HTMLElementAssembler } from './element'

const { HTMLTableCaptionElement } = window

export class Caption extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableCaptionElement}
     */
    static get interface() {
        return HTMLTableCaptionElement
    }
}

/**
 * @param {*} [init]
 * @returns {Caption}
 */
export function caption(init) {
    return new Caption(init)
}

Caption.register()
