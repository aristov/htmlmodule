import { Td } from './td'

export class Th extends Td {
    /**
     * @param {String} scope
     */
    set scope(scope) {
        this.node.scope = scope
    }

    /**
     * @returns {String}
     */
    get scope() {
        return this.node.scope
    }

    /**
     * @param {String} abbr
     */
    set abbr(abbr) {
        this.node.abbr = abbr
    }

    /**
     * @returns {String} 
     */
    get abbr() {
        return this.node.abbr
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {Th}
 */
export function th(...init) {
    return new Th(...init)
}

const LOCAL_NAME = th.name
