import { HTMLElementAssembler } from './element'

const { HTMLMeterElement } = window

export class Meter extends HTMLElementAssembler {
    // todo
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
