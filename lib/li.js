import { HTMLElementAssembler } from './element'

const { HTMLLIElement } = window

export class Li extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLLIElement}
     */
    static get interface() {
        return HTMLLIElement
    }
}

/**
 * @param {*} [init]
 * @returns {Li}
 */
export function li(init) {
    return new Li(init)
}
