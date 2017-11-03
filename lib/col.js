import { HTMLElementAssembler } from './element'

const { HTMLTableColElement } = window

export class Col extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableColElement}
     */
    static get interface() {
        return HTMLTableColElement
    }
}

/**
 * @param {*} [init]
 * @returns {Col}
 */
export function col(...init) {
    return new Col(...init)
}
