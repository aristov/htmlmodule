import { HTMLElementAssembler } from './element'

const { HTMLImageElement } = window

export class Img extends HTMLElementAssembler {
    /**
     * @returns {Promise}
     */
    decode() {
        return this.node.decode()
    }

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
     * @returns {Boolean}
     */
    get complete() {
        return this.node.complete
    }

    /**
     * @returns {String}
     */
    get currentSrc() {
        return this.node.currentSrc
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
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srcset
     */
    set srcset(srcset) {
        this.node.srcset = srcset
    }

    /**
     * @returns {String}
     */
    get srcset() {
        return this.node.srcset
    }

    /**
     * @param {String} sizes
     */
    set sizes(sizes) {
        this.node.sizes = sizes
    }

    /**
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
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
     * @param {String} useMap
     */
    set useMap(useMap) {
        this.node.useMap = useMap
    }

    /**
     * @returns {String}
     */
    get useMap() {
        return this.node.useMap
    }

    /**
     * @param {Boolean} isMap
     */
    set isMap(isMap) {
        this.node.isMap = isMap
    }

    /**
     * @returns {Boolean}
     */
    get isMap() {
        return this.node.isMap
    }

    /**
     * @returns {Number}
     */
    get naturalWidth() {
        return this.node.naturalWidth
    }

    /**
     * @returns {Number}
     */
    get naturalHeight() {
        return this.node.naturalHeight
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @returns {window.HTMLImageElement}
     */
    static get interface() {
        return HTMLImageElement
    }
}

/**
 * @param {*} [init]
 * @returns {Img}
 */
export function img(init) {
    return new Img(init)
}

Img.register()
