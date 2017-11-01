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
     * @param {String} hrefLang
     */
    set hrefLang(hrefLang) {
        this.node.hrefLang = hrefLang
    }

    /**
     * @returns {String}
     */
    get hrefLang() {
        return this.node.hrefLang
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
