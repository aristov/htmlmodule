import { HTMLElementAssembler } from './element'

const { HTMLOListElement } = window

export class Ol extends HTMLElementAssembler {
    /**
     * @param {Boolean} reversed
     */
    set reversed(reversed) {
        this.node.reversed = reversed
    }

    /**
     * @returns {Boolean}
     */
    get reversed() {
        return this.node.reversed
    }

    /**
     * @param {Number} start
     */
    set start(start) {
        this.node.start = start
    }

    /**
     * @returns {Number}
     */
    get start() {
        return this.node.start
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {window.HTMLOListElement}
     */
    static get interface() {
        return HTMLOListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ol}
 */
export function ol(init) {
    return new Ol(init)
}

Ol.register()
