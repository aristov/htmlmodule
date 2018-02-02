import { HTMLElementAssembler } from './element'

const { HTMLStyleElement } = window

export class Style extends HTMLElementAssembler {
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
     * @returns {window.HTMLStyleElement}
     */
    static get interface() {
        return HTMLStyleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Style}
 */
export function style(...init) {
    return new Style(...init)
}
