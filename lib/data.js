import { HTMLElementAssembler } from './element'

const { HTMLDataElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-data-element
 */
export class Data extends HTMLElementAssembler {
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
 * @param {*} [init]
 * @returns {Data}
 */
export function data(init) {
    return new Data(init)
}

Data.register()
