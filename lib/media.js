import { HTMLElementAssembler } from './element'

const { HTMLMediaElement } = window

export class HTMLMediaAssembler extends HTMLElementAssembler {
    // todo
    /**
     * @returns {Function} HTMLMediaAssembler
     */
    static get baseAssembler() {
        return HTMLMediaAssembler
    }

    /**
     * @returns {window.HTMLMediaElement}
     */
    static get interface() {
        return HTMLMediaElement
    }
}
