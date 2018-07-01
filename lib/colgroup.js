import { HTMLElementAssembler } from './element'

const { HTMLTableColElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-colgroup-element
 */
export class ColGroup extends HTMLElementAssembler {
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
        return HTMLTableColElement
    }
}

/**
 * @param {*} [init]
 * @returns {ColGroup}
 */
export function colgroup(init) {
    return new ColGroup(init)
}

ColGroup.register()
