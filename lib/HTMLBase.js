import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLBaseElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-base-element
 */
export class HTMLBase extends HTMLElementAssembler {
    /**
     * @param {string} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {string}
     */
    get href() {
        return this.node.href
    }

    /**
     * @param {string} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {string}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {interface} HTMLBaseElement
     * @override
     */
    static get interface() {
        return HTMLBaseElement || super.interface
    }
}

/**
 * @alias HTMLBase
 */
export { HTMLBase as Base }

/**
 * @param {*} [init]
 * @returns {HTMLBase}
 */
export function base(init) {
    return new HTMLBase(init)
}

HTMLBase.register()
