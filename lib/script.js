import { HTMLElementAssembler } from './element'

const { HTMLScriptElement } = window

export class Script extends HTMLElementAssembler {
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
     * @param {String} charset
     */
    set charset(charset) {
        this.node.charset = charset
    }

    /**
     * @returns {String}
     */
    get charset() {
        return this.node.charset
    }

    /**
     * @param {Boolean} async
     */
    set async(async) {
        this.node.async = async
    }

    /**
     * @returns {Boolean}
     */
    get async() {
        return this.node.async
    }

    /**
     * @param {Boolean} defer
     */
    set defer(defer) {
        this.node.defer = defer
    }

    /**
     * @returns {Boolean}
     */
    get defer() {
        return this.node.defer
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
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
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
     * @returns {window.HTMLScriptElement}
     */
    static get interface() {
        return HTMLScriptElement
    }
}

/**
 * @param {*} [init]
 * @returns {Script}
 */
export function script(init) {
    return new Script(init)
}

Script.register()
