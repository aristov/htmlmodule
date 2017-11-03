import { HTMLElementAssembler } from './element'

const { HTMLDataElement } = window

export class Data extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLDataElement}
     */
    static get interface() {
        return HTMLDataElement
    }
}

/**
 * @param {*} [init]
 * @returns {Data}
 */
export function data(...init) {
    return new Data(...init)
}
