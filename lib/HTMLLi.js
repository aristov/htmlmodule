import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLLIElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-li-element
 */
export class HTMLLi extends HTMLElementAssembler {
    /**
     * @param {number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {interface} HTMLLIElement
     * @override
     */
    static get interface() {
        return HTMLLIElement || super.interface
    }
}

/**
 * @alias HTMLLi
 */
export { HTMLLi as Li }

/**
 * @param {*} [init]
 * @returns {HTMLLi}
 */
export function li(init) {
    return new HTMLLi(init)
}

HTMLLi.register()
