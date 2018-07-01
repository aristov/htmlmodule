import { HTMLElementAssembler } from './element'

const { HTMLDListElement } = window

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
