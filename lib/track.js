import { HTMLElementAssembler } from './element'

const { HTMLTrackElement } = window

export class Track extends HTMLElementAssembler {
    /**
     * @param {String} kind
     */
    set kind(kind) {
        this.node.kind = kind
    }

    /**
     * @returns {String}
     */
    get kind() {
        return this.node.kind 
    }

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
     * @param {String} srclang
     */
    set srclang(srclang) {
        this.node.srclang = srclang
    }

    /**
     * @returns {String}
     */
    get srclang() {
        return this.node.srclang
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.node.label
    }

    /**
     * @param {Boolean} value
     */
    set default(value) {
        this.node.default = value
    }

    /**
     * @returns {Boolean}
     */
    get default() {
        return this.node.default
    }

    /**
     * @returns {Number}
     */
    get readyState() {
        return this.node.readyState
    }

    /**
     * @returns {TextTrack}
     */
    get track() {
        return this.node.track
    }

    /**
     * @returns {window.HTMLTrackElement}
     */
    static get interface() {
        return HTMLTrackElement
    }
}

/**
 * @param {*} [init]
 * @returns {Track}
 */
export function track(init) {
    return new Track(init)
}

Track.register()
