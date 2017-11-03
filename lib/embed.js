import { HTMLElementAssembler } from './element'

const { HTMLEmbedElement } = window

export class Embed extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLEmbedElement}
     */
    static get interface() {
        return HTMLEmbedElement
    }
}

/**
 * @param {*} [init]
 * @returns {Embed}
 */
export function embed(...init) {
    return new Embed(...init)
}
