import { HTMLElementAssembler } from './element'

const { HTMLProgressElement } = window

export class Progress extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLProgressElement}
     */
    static get interface() {
        return HTMLProgressElement
    }
}

/**
 * @param {*} [init]
 * @returns {Progress}
 */
export function progress(...init) {
    return new Progress(...init)
}
