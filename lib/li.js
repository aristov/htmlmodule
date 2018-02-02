import { HTMLElementAssembler } from './element'

const { HTMLLIElement } = window

export class Li extends HTMLElementAssembler {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

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
