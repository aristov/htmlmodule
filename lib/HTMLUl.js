import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLUListElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ul-element
 */
export class HTMLUl extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLUListElement
     * @override
     */
    static get interface() {
        return HTMLUListElement || super.interface
    }
}

/**
 * @alias HTMLUl
 */
export { HTMLUl as Ul }

/**
 * @param {*} [init]
 * @returns {HTMLUl}
 */
export function ul(init) {
    return new HTMLUl(init)
}

HTMLUl.register()
