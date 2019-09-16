import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLDataElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-data-element
 */
export class HTMLData extends HTMLElementAssembler {
    /**
     * @param {string} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {interface} HTMLDataElement
     * @override
     */
    static get interface() {
        return HTMLDataElement || super.interface
    }
}

/**
 * @alias HTMLData
 */
export { HTMLData as Data }

/**
 * @param {*} [init]
 * @returns {HTMLData}
 */
export function data(init) {
    return new HTMLData(init)
}

HTMLData.register()
