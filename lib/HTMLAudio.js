import { HTMLMediaAssembler } from './HTMLMediaAssembler'

const { HTMLAudioElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#dom-htmlaudioelement-audio
 */
export class HTMLAudio extends HTMLMediaAssembler {
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
 * @returns {HTMLAudio}
 */
export function audio(init) {
    return new HTMLAudio(init)
}

HTMLAudio.register()
