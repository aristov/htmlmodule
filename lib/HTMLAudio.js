import { HTMLMediaAssembler } from './HTMLMediaAssembler'

const { HTMLAudioElement } = window

/**
 * Not to be confused with the native Audio class of the HTML standard
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
 * @alias
 */
export { HTMLAudio as Audio }

/**
 * @param {*} [init]
 * @returns {HTMLAudio}
 */
export function audio(init) {
    return new HTMLAudio(init)
}

HTMLAudio.register()
