import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLOListElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ol-element
 */
export class HTMLOl extends HTMLElementAssembler {
    /**
     * @param {boolean} reversed
     */
    set reversed(reversed) {
        this.node.reversed = reversed
    }

    /**
     * @returns {boolean}
     */
    get reversed() {
        return this.node.reversed
    }

    /**
     * @param {number} start
     */
    set start(start) {
        this.node.start = start
    }

    /**
     * @returns {number}
     */
    get start() {
        return this.node.start
    }

    /**
     * @param {string} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {string}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {interface} HTMLOListElement
     * @override
     */
    static get interface() {
        return HTMLOListElement || super.interface
    }
}

/**
 * @alias HTMLOl
 */
export { HTMLOl as Ol }

/**
 * @param {*} [init]
 * @returns {HTMLOl}
 */
export function ol(init) {
    return new HTMLOl(init)
}

HTMLOl.register()
