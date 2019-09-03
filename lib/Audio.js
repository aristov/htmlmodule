import { HTMLMediaAssembler } from './HTMLMediaAssembler'

const { HTMLAudioElement } = window

/**
 * Not to be confused with the native Audio class of the HTML standard
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

export const HTMLAudio = Audio

/**
 * @param {*} [init]
 * @returns {Audio}
 */
export function audio(init) {
    return new Audio(init)
}

Audio.register()
