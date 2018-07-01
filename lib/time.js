import { HTMLElementAssembler } from './element'

const { HTMLTimeElement } = window

export class Time extends HTMLElementAssembler {
    /**
     * @param {string} dateTime
     */
    set dateTime(dateTime) {
        this.node.dateTime = dateTime
    }

    /**
     * @returns {string}
     */
    get dateTime() {
        return this.node.dateTime
    }

    /**
     * @returns {interface} HTMLTimeElement
     * @override
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

Time.register()
