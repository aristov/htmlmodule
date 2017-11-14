import { HTMLElementAssembler } from './element'

const { HTMLAreaElement } = window

export class Area extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLAreaElement}
     */
    static get interface() {
        return HTMLAreaElement
    }
}

/**
 * @param {*} [init]
 * @returns {Area}
 */
export function area(...init) {
    return new Area(...init)
}
