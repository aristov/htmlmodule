import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLTableSectionElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tfoot-element
 */
export class TFoot extends HTMLElementAssembler {
    /**
     * @param {number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstanceOf(this.node.insertRow(index))
    }

    /**
     * @param {number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => this.getInstanceOf(node))
    }

    /**
     * @returns {interface} HTMLTableSectionElement
     * @override
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}

/**
 * @param {*} [init]
 * @returns {TFoot}
 */
export function tfoot(init) {
    return new TFoot(init)
}

TFoot.register()
