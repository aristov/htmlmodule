import { HTMLElementAssembler } from './element'

const { HTMLTimeElement } = window

export class Time extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTimeElement}
     */
    static get interface() {
        return HTMLTimeElement
    }
}

/**
 * @param {*} [init]
 * @returns {Time}
 */
export function time(...init) {
    return new Time(...init)
}
