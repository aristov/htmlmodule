import { HTMLElementAssembler } from './element'

const { HTMLCanvasElement } = window

export class Canvas extends HTMLElementAssembler {
    /**
     * @param {String} contextId
     * @param {*} args
     * @returns {*|CanvasRenderingContext2D|WebGLRenderingContext}
     */
    getContext(contextId, ...args) {
        return this.node.getContext(contextId, ...args)
    }

    /**
     * @param {String} contextId
     * @param {*} args
     * @returns {Boolean}
     */
    probablySupportsContext(contextId, ...args) {
        return this.node.probablySupportsContext(contextId, ...args)
    }

    /**
     * @param {String} type
     * @param {*} args
     * @returns {String}
     */
    toDataURL(type, ...args) {
        return this.node.toDataURL(type, ...args)
    }

    /**
     * @param {Function} _callback
     * @param {String} type
     * @param {*} args
     */
    toBlob(_callback, type, ...args) {
        this.node.toBlob(_callback, type, ...args)
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
     * @returns {window.HTMLCanvasElement}
     */
    static get interface() {
        return HTMLCanvasElement
    }
}

/**
 * @param {*} [init]
 * @returns {Canvas}
 */
export function canvas(...init) {
    return new Canvas(...init)
}
