import { HTMLElementAssembler } from './element'

const { HTMLStyleElement } = window

export class Style extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLStyleElement}
     */
    static get interface() {
        return HTMLStyleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Style}
 */
export function style(...init) {
    return new Style(...init)
}
