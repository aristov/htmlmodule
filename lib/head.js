import { HTMLElementAssembler } from './element'

const { HTMLHeadElement } = window

export class Head extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLHeadElement}
     */
    static get interface() {
        return HTMLHeadElement
    }
}

/**
 * @param {*} [init]
 * @returns {Head}
 */
export function head(init) {
    return new Head(init)
}
