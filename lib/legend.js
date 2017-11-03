import { HTMLElementAssembler } from './element'

const { HTMLLegendElement } = window

export class Legend extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLLegendElement}
     */
    static get interface() {
        return HTMLLegendElement
    }
}

/**
 * @param {*} [init]
 * @returns {Legend}
 */
export function legend(...init) {
    return new Legend(...init)
}
