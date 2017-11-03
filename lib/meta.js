import { HTMLElementAssembler } from './element'

const { HTMLMetaElement } = window

export class Meta extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLMetaElement}
     */
    static get interface() {
        return HTMLMetaElement
    }
}

/**
 * @param {*} [init]
 * @returns {Meta}
 */
export function meta(...init) {
    return new Meta(...init)
}
