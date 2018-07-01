import { HTMLElementAssembler } from './element'

const { HTMLTableColElement } = window

export class Col extends HTMLElementAssembler {
    /**
     * @param {number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {interface} HTMLTableColElement
     * @override
     */
    static get interface() {
        return HTMLTableColElement
    }
}

/**
 * @param {*} [init]
 * @returns {Col}
 */
export function col(init) {
    return new Col(init)
}

Col.register()
