import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLStyleElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-style-element
 */
export class HTMLStyle extends HTMLElementAssembler {
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
        return HTMLStyleElement || super.interface
    }
}

/**
 * @alias HTMLStyle
 */
export { HTMLStyle as Style }

/**
 * @param {*} [init]
 * @returns {HTMLStyle}
 */
export function style(init) {
    return new HTMLStyle(init)
}

HTMLStyle.register()
