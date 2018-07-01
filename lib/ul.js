import { HTMLElementAssembler } from './element'

const { HTMLUListElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ul-element
 */
export class Ul extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLUListElement
     * @override
     */
    static get interface() {
        return HTMLUListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ul}
 */
export function ul(init) {
    return new Ul(init)
}

Ul.register()
