import { HTMLMediaAssembler } from './media'

const { HTMLVideoElement } = window

export class Video extends HTMLMediaAssembler {
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
     * @returns {Number}
     */
    get videoWidth() {
        return this.node.videoWidth
    }

    /**
     * @returns {Number}
     */
    get videoHeight() {
        return this.node.videoHeight
    }

    /**
     * @param {String} poster
     */
    set poster(poster) {
        this.node.poster = poster
    }

    /**
     * @returns {String}
     */
    get poster() {
        return this.node.poster
    }

    /**
     * @returns {window.HTMLVideoElement}
     */
    static get interface() {
        return HTMLVideoElement
    }
}

/**
 * @param {*} [init]
 * @returns {Video}
 */
export function video(...init) {
    return new Video(...init)
}
