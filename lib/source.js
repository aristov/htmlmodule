import { HTMLElementAssembler } from './element'

const { HTMLSourceElement } = window

export class Source extends HTMLElementAssembler {
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
     * @returns {window.HTMLSourceElement}
     */
    static get interface() {
        return HTMLSourceElement
    }
}

/**
 * @param {*} [init]
 * @returns {Source}
 */
export function source(...init) {
    return new Source(...init)
}
