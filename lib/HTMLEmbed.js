import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLEmbedElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-embed-element
 */
export class HTMLEmbed extends HTMLElementAssembler {
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
     * @param {number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {interface} HTMLEmbedElement
     * @override
     */
    static get interface() {
        return HTMLEmbedElement || super.interface
    }
}

/**
 * @alias HTMLEmbed
 */
export { HTMLEmbed as Embed }

/**
 * @param {*} [init]
 * @returns {HTMLEmbed}
 */
export function embed(init) {
    return new HTMLEmbed(init)
}

HTMLEmbed.register()
