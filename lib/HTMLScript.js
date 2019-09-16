import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLScriptElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-script-element
 */
export class HTMLScript extends HTMLElementAssembler {
    /**
     * @param {string} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {string}
     */
    get src() {
        return this.node.src
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
     * @param {string} charset
     */
    set charset(charset) {
        this.node.charset = charset
    }

    /**
     * @returns {string}
     */
    get charset() {
        return this.node.charset
    }

    /**
     * @param {boolean} async
     */
    set async(async) {
        this.node.async = async
    }

    /**
     * @returns {boolean}
     */
    get async() {
        return this.node.async
    }

    /**
     * @param {boolean} defer
     */
    set defer(defer) {
        this.node.defer = defer
    }

    /**
     * @returns {boolean}
     */
    get defer() {
        return this.node.defer
    }

    /**
     * @param {string} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {string}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {string} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {string}
     */
    get text() {
        return this.node.text
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
     * @returns {interface} HTMLScriptElement
     * @override
     */
    static get interface() {
        return HTMLScriptElement || super.interface
    }
}

/**
 * @alias HTMLScript
 */
export { HTMLScript as Script }

/**
 * @param {*} [init]
 * @returns {HTMLScript}
 */
export function script(init) {
    return new HTMLScript(init)
}

HTMLScript.register()
