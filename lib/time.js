import { HTMLElementAssembler } from './element'

const { HTMLTimeElement } = window

export class Time extends HTMLElementAssembler {
    /**
     * @param {String} dateTime
     */
    set dateTime(dateTime) {
        this.node.dateTime = dateTime
    }

    /**
     * @returns {String}
     */
    get dateTime() {
        return this.node.dateTime
    }

    /**
     * @returns {window.HTMLTimeElement}
     */
    static get interface() {
        return HTMLTimeElement
    }
}

/**
 * @param {*} [init]
 * @returns {Time}
 */
export function time(init) {
    return new Time(init)
}
