import { HTMLElementAssembler } from './element'

const { HTMLBodyElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-body-element
 */
export class Body extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLBodyElement
     * @override
     */
    static get interface() {
        return HTMLBodyElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Body}
 */
export function body(init) {
    return new Body(init)
}

Body.register()
