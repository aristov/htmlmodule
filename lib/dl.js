import { HTMLElementAssembler } from './element'

const { HTMLDListElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dl-element
 */
export class Dl extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLDListElement
     * @override
     */
    static get interface() {
        return HTMLDListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Dl}
 */
export function dl(init) {
    return new Dl(init)
}

Dl.register()
