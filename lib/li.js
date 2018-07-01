import { HTMLElementAssembler } from './element'

const { HTMLLIElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-li-element
 */
export class Li extends HTMLElementAssembler {
    /**
     * @param {number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {interface} HTMLLIElement
     * @override
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

Li.register()
