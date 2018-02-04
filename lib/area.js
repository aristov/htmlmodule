import { HTMLElementAssembler } from './element'

const { HTMLAreaElement } = window

export class Area extends HTMLElementAssembler {
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
    // todo => HTMLHyperlinkElementUtils

    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {String} coords
     */
    set coords(coords) {
        this.node.coords = coords
    }

    /**
     * @returns {String}
     */
    get coords() {
        return this.node.coords
    }

    /**
     * @param {String} shape
     */
    set shape(shape) {
        this.node.shape = shape
    }

    /**
     * @returns {String}
     */
    get shape() {
        return this.node.shape
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
     * @param {String} download
     */
    set download(download) {
        this.node.download = download
    }

    /**
     * @returns {String}
     */
    get download() {
        return this.node.download
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
     * @returns {DOMTokenList}
     */
    get relList() {
        return this.node.relList
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
     * @returns {window.HTMLAreaElement}
     */
    static get interface() {
        return HTMLAreaElement
    }
}

/**
 * @param {*} [init]
 * @returns {Area}
 */
export function area(...init) {
    return new Area(...init)
}
