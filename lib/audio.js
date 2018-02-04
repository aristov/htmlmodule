import { HTMLMediaAssembler } from './media'

const { HTMLAudioElement } = window

export class Audio extends HTMLMediaAssembler {
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
