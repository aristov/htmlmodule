import { HTMLElementAssembler } from './element'

const { HTMLModElement } = window

export class Ins extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLModElement}
     */
    static get interface() {
        return HTMLModElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ins}
 */
export function ins(...init) {
    return new Ins(...init)
}
