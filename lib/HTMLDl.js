import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLDListElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dl-element
 */
export class HTMLDl extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLDListElement
     * @override
     */
    static get interface() {
        return HTMLDListElement || super.interface
    }
}

/**
 * @alias HTMLDl
 */
export { HTMLDl as Dl }

/**
 * @param {*} [init]
 * @returns {HTMLDl}
 */
export function dl(init) {
    return new HTMLDl(init)
}

HTMLDl.register()
