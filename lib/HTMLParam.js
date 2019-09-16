import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLParamElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-param-element
 */
export class HTMLParam extends HTMLElementAssembler {
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
 * @alias HTMLParam
 */
export { HTMLParam as Param }

/**
 * @param {*} [init]
 * @returns {HTMLParam}
 */
export function param(init) {
    return new HTMLParam(init)
}

HTMLParam.register()
