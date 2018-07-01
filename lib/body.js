import { HTMLElementAssembler } from './element'

const { HTMLBodyElement } = window

export class Body extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLBodyElement
     * @override
     */
    static get interface() {
        return HTMLBodyElement
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
