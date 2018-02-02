import { HTMLElementAssembler } from './element'

const { HTMLLinkElement } = window

export class Link extends HTMLElementAssembler {
    // todo
    /**
     * @returns {window.HTMLLinkElement}
     */
    static get interface() {
        return HTMLLinkElement
    }
}

/**
 * @param {*} [init]
 * @returns {Link}
 */
export function link(...init) {
    return new Link(...init)
}
