import { HTMLElementAssembler } from './element'

const { HTMLBRElement } = window

export class Br extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLBRElement
     * @override
     */
    static get interface() {
        return HTMLBRElement
    }
}

/**
 * @param {*} [init]
 * @returns {Br}
 */
export function br(init) {
    return new Br(init)
}

Br.register()
