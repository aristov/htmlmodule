import { HTMLElementAssembler } from './element'

const { HTMLHRElement } = window

export class Hr extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLHRElement}
     */
    static get interface() {
        return HTMLHRElement
    }
}

/**
 * @param {*} [init]
 * @returns {Hr}
 */
export function hr(...init) {
    return new Hr(...init)
}
