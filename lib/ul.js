import { HTMLElementAssembler } from './element'

const { HTMLUListElement } = window

export class Ul extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLUListElement}
     */
    static get interface() {
        return HTMLUListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ul}
 */
export function ul(init) {
    return new Ul(init)
}
