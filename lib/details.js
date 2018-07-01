import { HTMLElementAssembler } from './element'

const { HTMLDetailsElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-details-element
 */
export class Details extends HTMLElementAssembler {
    /**
     * @param {boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {boolean}
     */
    get open() {
        return this.node.open
    }

    /**
     * @returns {interface} HTMLDetailsElement
     * @override
     */
    static get interface() {
        return HTMLDetailsElement
    }
}

/**
 * @param {*} [init]
 * @returns {Details}
 */
export function details(init) {
    return new Details(init)
}

Details.register()
