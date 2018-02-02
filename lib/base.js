import { HTMLElementAssembler } from './element'

const { HTMLBaseElement } = window

export class Base extends HTMLElementAssembler {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {window.HTMLBaseElement}
     */
    static get interface() {
        return HTMLBaseElement
    }
}

/**
 * @param {*} [init]
 * @returns {Base}
 */
export function base(...init) {
    return new Base(...init)
}
