import { HTMLElementAssembler } from './element'

const { HTMLOutputElement } = window

export class Output extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLOutputElement}
     */
    static get interface() {
        return HTMLOutputElement
    }
}

/**
 * @param {*} [init]
 * @returns {Output}
 */
export function output(...init) {
    return new Output(...init)
}
