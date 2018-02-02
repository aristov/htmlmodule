import { HTMLElementAssembler } from './element'

const { HTMLDialogElement } = window

export class Dialog extends HTMLElementAssembler {
    // todo
    /**
     * @returns {window.HTMLDialogElement}
     */
    static get interface() {
        return HTMLDialogElement
    }
}

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
export function dialog(...init) {
    return new Dialog(...init)
}
