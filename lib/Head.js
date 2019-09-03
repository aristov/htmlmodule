import { HTMLElementAssembler } from './HTMLElementAssembler'

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

export const HTMLHead = Head

/**
 * @param {*} [init]
 * @returns {Head}
 */
export function head(init) {
    return new Head(init)
}

Head.register()
