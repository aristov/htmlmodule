import { HTMLElementAssembler } from './element'

const { HTMLAnchorElement } = window

export class A extends HTMLElementAssembler {
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
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
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
     * @returns {window.HTMLAnchorElement}
     */
    static get interface() {
        return HTMLAnchorElement
    }
}

/**
 * @param {*} [init]
 * @returns {A}
 */
export function a(init) {
    return new A(init)
}
