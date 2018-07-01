import { HTMLElementAssembler } from './element'

const { HTMLParamElement } = window

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
        return HTMLParamElement
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
