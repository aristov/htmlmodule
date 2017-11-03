import { HTMLElementAssembler } from './element'

const { HTMLOListElement } = window

export class Ol extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLOListElement}
     */
    static get interface() {
        return HTMLOListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ol}
 */
export function ol(init) {
    return new Ol(init)
}
