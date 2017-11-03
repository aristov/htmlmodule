import { HTMLElementAssembler } from './element'

const { HTMLVideoElement } = window

export class Video extends HTMLElementAssembler {
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
