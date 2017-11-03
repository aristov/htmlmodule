import { HTMLElementAssembler } from './element'

const { HTMLMeterElement } = window

export class Meter extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLMeterElement}
     */
    static get interface() {
        return HTMLMeterElement
    }
}

/**
 * @param {*} [init]
 * @returns {Meter}
 */
export function meter(...init) {
    return new Meter(...init)
}
