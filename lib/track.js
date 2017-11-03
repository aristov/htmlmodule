import { HTMLElementAssembler } from './element'

const { HTMLTrackElement } = window

export class Track extends HTMLElementAssembler {
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
export function track(...init) {
    return new Track(...init)
}
