import { HTMLElementAssembler } from './element'

const { HTMLModElement } = window

export class HTMLModAssembler extends HTMLElementAssembler {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

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
     * @returns {Function} HTMLModAssembler
     */
    static get baseAssembler() {
        return HTMLModAssembler
    }

    /**
     * @returns {window.HTMLModElement}
     */
    static get interface() {
        return HTMLModElement
    }
}
