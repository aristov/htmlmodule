import { HTMLElementAssembler } from './element'

const { HTMLDataElement } = window

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
        return HTMLDataElement
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
