import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTableColElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-colgroup-element
 */
export class HTMLColGroup extends HTMLElementAssembler {
    /**
     * @param {number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {interface} HTMLTableColElement
     * @override
     */
    static get interface() {
        return HTMLTableColElement || super.interface
    }
}

/**
 * @alias HTMLColGroup
 */
export { HTMLColGroup as ColGroup }

/**
 * @param {*} [init]
 * @returns {HTMLColGroup}
 */
export function colgroup(init) {
    return new HTMLColGroup(init)
}

HTMLColGroup.register()
