import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLModElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlmodelement
 * @abstract
 */
export class HTMLModAssembler extends HTMLElementAssembler {
    /**
     * @param {string} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {string}
     */
    get cite() {
        return this.node.cite
    }

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
     * @returns {class} HTMLModAssembler
     */
    static get superAssembler() {
        return HTMLModAssembler
    }

    /**
     * @returns {interface} HTMLModElement
     * @override
     */
    static get interface() {
        return HTMLModElement || super.interface
    }
}
