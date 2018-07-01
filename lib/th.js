import { Td } from './td'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-th-element
 */
export class Th extends Td {
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
     * @returns {string}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {Th}
 */
export function th(init) {
    return new Th(init)
}

const LOCAL_NAME = th.name

Th.register()
