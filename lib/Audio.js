import { HTMLMediaAssembler } from './HTMLMediaAssembler'

const { HTMLAudioElement } = window

/**
 * The `HTML` prefix is used to avoid a conflict with the Audio class from the HTML standard
 * @see https://www.w3.org/TR/html/single-page.html#dom-htmlaudioelement-audio
 */
export class Audio extends HTMLMediaAssembler {
    /**
     * @returns {interface} HTMLAudioElement
     * @override
     */
    static get interface() {
        return HTMLAudioElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Audio}
 */
export function audio(init) {
    return new Audio(init)
}

Audio.register()
