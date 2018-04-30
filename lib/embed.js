import { HTMLElementAssembler } from './element'

const { HTMLEmbedElement } = window

export class Embed extends HTMLElementAssembler {
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
     * @returns {window.HTMLEmbedElement}
     */
    static get interface() {
        return HTMLEmbedElement
    }
}

/**
 * @param {*} [init]
 * @returns {Embed}
 */
export function embed(init) {
    return new Embed(init)
}
