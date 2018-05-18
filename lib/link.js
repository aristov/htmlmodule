import { HTMLElementAssembler } from './element'

const { HTMLLinkElement } = window

export class Link extends HTMLElementAssembler {
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
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
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
     * @param {String} rev
     */
    set rev(rev) {
        this.node.rev = rev
    }

    /**
     * @returns {String}
     */
    get rev() {
        return this.node.rev
    }

    /**
     * @returns {DOMTokenList}
     */
    get relList() {
        return this.node.relList
    }

    /**
     * @param {String} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.node.media
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
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
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }
    
    /**
     * @returns {window.HTMLLinkElement}
     */
    static get interface() {
        return HTMLLinkElement
    }
}

/**
 * @param {*} [init]
 * @returns {Link}
 */
export function link(init) {
    return new Link(init)
}

Link.register()
