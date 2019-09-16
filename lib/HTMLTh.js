import { HTMLTableCellAssembler } from './HTMLTableCellAssembler'

const { HTMLTableHeaderCellElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-th-element
 */
export class HTMLTh extends HTMLTableCellAssembler {
    /**
     * @param {string} scope
     */
    set scope(scope) {
        this.node.scope = scope
    }

    /**
     * @returns {string}
     */
    get scope() {
        return this.node.scope
    }

    /**
     * @param {string} abbr
     */
    set abbr(abbr) {
        this.node.abbr = abbr
    }

    /**
     * @returns {string}
     */
    get abbr() {
        return this.node.abbr
    }

    /**
     * @returns {interface} HTMLTableHeaderCellElement
     * @override
     */
    static get interface() {
        return HTMLTableHeaderCellElement || super.interface
    }
}

/**
 * @alias HTMLTh
 */
export { HTMLTh as Th }

/**
 * @param {*} [init]
 * @returns {HTMLTh}
 */
export function th(init) {
    return new HTMLTh(init)
}

HTMLTh.register()
