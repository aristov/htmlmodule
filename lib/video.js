import { HTMLMediaAssembler } from './media'

const { HTMLVideoElement } = window

export class Video extends HTMLMediaAssembler {
    // todo
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
