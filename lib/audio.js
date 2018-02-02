import { HTMLElementAssembler } from './element'

const { HTMLAudioElement } = window

export class Audio extends HTMLElementAssembler {
    // todo
    /**
     * @returns {window.HTMLAudioElement}
     */
    static get interface() {
        return HTMLAudioElement
    }
}

/**
 * @param {*} [init]
 * @returns {Audio}
 */
export function audio(...init) {
    return new Audio(...init)
}
