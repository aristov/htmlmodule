import { HTMLElementAssembler } from './element'

const { HTMLModElement } = window

export class Del extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLModElement}
     */
    static get interface() {
        return HTMLModElement
    }
}

/**
 * @param {*} [init]
 * @returns {Del}
 */
export function del(...init) {
    return new Del(...init)
}
