import { HTMLElementAssembler } from './element'

const { HTMLTableCaptionElement } = window

export class Caption extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLTableCaptionElement
     * @override
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
