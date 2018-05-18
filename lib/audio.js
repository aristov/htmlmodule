import { HTMLMediaAssembler } from './media'

const { HTMLAudioElement } = window

/**
 * The `HTML` prefix is used to avoid a conflict with the Audio class from the HTML standard
 * https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlaudioelement-audio
 */
export class HTMLAudio extends HTMLMediaAssembler {
    /**
     * @returns {window.HTMLAudioElement}
     */
    static get interface() {
        return HTMLAudioElement
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
