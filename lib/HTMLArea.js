import { HTMLHyperlinkAssembler } from './HTMLHyperlinkAssembler'

const { HTMLAreaElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-area-element
 */
export class HTMLArea extends HTMLHyperlinkAssembler {
    /**
     * @param {string} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {string}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {string} coords
     */
    set coords(coords) {
        this.node.coords = coords
    }

    /**
     * @returns {string}
     */
    get coords() {
        return this.node.coords
    }

    /**
     * @param {string} shape
     */
    set shape(shape) {
        this.node.shape = shape
    }

    /**
     * @returns {string}
     */
    get shape() {
        return this.node.shape
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
     * @param {string} download
     */
    set download(download) {
        this.node.download = download
    }

    /**
     * @returns {string}
     */
    get download() {
        return this.node.download
    }

    /**
     * @param {string} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {string}
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
     * @param {string} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {string}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {string} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {string}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {string} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {string}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {interface} HTMLAreaElement
     * @override
     */
    static get interface() {
        return HTMLAreaElement || super.interface
    }
}

/**
 * @alias HTMLArea
 */
export { HTMLArea as Area }

/**
 * @param {*} [init]
 * @returns {HTMLArea}
 */
export function area(init) {
    return new HTMLArea(init)
}

HTMLArea.register()
