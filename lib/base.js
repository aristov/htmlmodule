import { HTMLElementAssembler } from './element'

const { HTMLBaseElement } = window

export class Base extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLBaseElement}
     */
    static get interface() {
        return HTMLBaseElement
    }
}

/**
 * @param {*} [init]
 * @returns {Base}
 */
export function base(...init) {
    return new Base(...init)
}
