import { HTMLElementAssembler } from './element'

const { HTMLTableColElement } = window

export class Col extends HTMLElementAssembler {
    /**
     * @param {Number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {Number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {window.HTMLTableColElement}
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
