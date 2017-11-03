import { HTMLElementAssembler } from './element'

const { HTMLMapElement } = window

export class Map extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLMapElement}
     */
    static get interface() {
        return HTMLMapElement
    }
}

/**
 * @param {*} [init]
 * @returns {Map}
 */
export function map(...init) {
    return new Map(...init)
}
