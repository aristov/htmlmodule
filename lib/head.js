import { HTMLElementAssembler } from './element'

const { HTMLHeadElement } = window

export class Head extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHeadElement
     * @override
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

Head.register()
