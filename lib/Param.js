import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLParamElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-param-element
 */
export class Param extends HTMLElementAssembler {
    /**
     * @param {string} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.node.name
    }

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
     * @returns {interface} HTMLParamElement
     * @override
     */
    static get interface() {
        return HTMLParamElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Param}
 */
export function param(init) {
    return new Param(init)
}

Param.register()
