import { HTMLElementAssembler } from './element'

const { HTMLHeadElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-head-element
 */
export class Head extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHeadElement
     * @override
     */
    static get interface() {
        return HTMLHeadElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Head}
 */
export function head(init) {
    return new Head(init)
}

Head.register()
