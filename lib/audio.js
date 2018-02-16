import { HTMLMediaAssembler } from './media'

const { HTMLAudioElement } = window
const LOCAL_NAME = 'audio'

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the Audio class from the HTML standard
 * https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlaudioelement-audio
 */
export class HTMLAudio extends HTMLMediaAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

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
export function audio(...init) {
    return new HTMLAudio(...init)
}
