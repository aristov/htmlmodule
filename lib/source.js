import { HTMLElementAssembler } from './element'

const { HTMLSourceElement } = window

export class Source extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLSourceElement}
     */
    static get interface() {
        return HTMLSourceElement
    }
}

/**
 * @param {*} [init]
 * @returns {Source}
 */
export function source(...init) {
    return new Source(...init)
}
