import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTimeElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-time-element
 */
export class HTMLTime extends HTMLElementAssembler {
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
        return HTMLTimeElement || super.interface
    }
}

/**
 * @alias HTMLTime
 */
export { HTMLTime as Time }

/**
 * @param {*} [init]
 * @returns {HTMLTime}
 */
export function time(init) {
    return new HTMLTime(init)
}

HTMLTime.register()
