import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLDetailsElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-details-element
 */
export class HTMLDetails extends HTMLElementAssembler {
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
        return HTMLDetailsElement || super.interface
    }
}

/**
 * @alias HTMLDetails
 */
export { HTMLDetails as Details }

/**
 * @param {*} [init]
 * @returns {HTMLDetails}
 */
export function details(init) {
    return new HTMLDetails(init)
}

HTMLDetails.register()
