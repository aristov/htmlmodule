import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTableColElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-col-element
 */
export class HTMLCol extends HTMLElementAssembler {
    /**
     * @param {number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {interface} HTMLTableColElement
     * @override
     */
    static get interface() {
        return HTMLTableColElement || super.interface
    }
}

/**
 * @alias HTMLCol
 */
export { HTMLCol as Col }

/**
 * @param {*} [init]
 * @returns {HTMLCol}
 */
export function col(init) {
    return new HTMLCol(init)
}

HTMLCol.register()
