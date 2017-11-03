import { HTMLElementAssembler } from './element'

const { HTMLTitleElement } = window

export class Title extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTitleElement}
     */
    static get interface() {
        return HTMLTitleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Title}
 */
export function title(...init) {
    return new Title(...init)
}
