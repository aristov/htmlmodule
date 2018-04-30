import { HTMLElementAssembler } from './element'

const { HTMLBRElement } = window

export class Br extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLBRElement}
     */
    static get interface() {
        return HTMLBRElement
    }
}

/**
 * @param {*} [init]
 * @returns {Br}
 */
export function br(init) {
    return new Br(init)
}
