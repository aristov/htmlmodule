import { HTMLElementAssembler } from './element'

const { HTMLStyleElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-style-element
 */
export class Style extends HTMLElementAssembler {
    /**
     * @param {string} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {string}
     */
    get media() {
        return this.node.media
    }

    /**
     * @param {string} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {string}
     */
    get nonce() {
        return this.node.nonce
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
     * @returns {interface} HTMLStyleElement
     * @override
     */
    static get interface() {
        return HTMLStyleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Style}
 */
export function style(init) {
    return new Style(init)
}

Style.register()
