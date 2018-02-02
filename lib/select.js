import { HTMLElementAssembler } from './element'

const { HTMLSelectElement } = window

export class Select extends HTMLElementAssembler {
    // todo
    /**
     * @returns {window.HTMLSelectElement}
     */
    static get interface() {
        return HTMLSelectElement
    }
}

/**
 * @param {*} [init]
 * @returns {Select}
 */
export function select(init) {
    return new Select(init)
}
