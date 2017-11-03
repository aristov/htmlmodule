import { HTMLElementAssembler } from './element'

const { HTMLScriptElement } = window

export class Script extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLScriptElement}
     */
    static get interface() {
        return HTMLScriptElement
    }
}

/**
 * @param {*} [init]
 * @returns {Script}
 */
export function script(...init) {
    return new Script(...init)
}
