import { HTMLElementAssembler } from './element'

const { HTMLDataElement } = window

export class Data extends HTMLElementAssembler {
    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLDataElement}
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
