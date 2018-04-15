import { HTMLElementAssembler } from './element'

const { HTMLParamElement } = window

export class Param extends HTMLElementAssembler {
    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

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
     * @returns {window.HTMLParamElement}
     */
    static get interface() {
        return HTMLParamElement
    }
}

/**
 * @param {*} [init]
 * @returns {Param}
 */
export function param(...init) {
    return new Param(...init)
}
