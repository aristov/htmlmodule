import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLTableSectionElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tfoot-element
 */
export class HTMLTFoot extends HTMLElementAssembler {
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
        return HTMLTableSectionElement || super.interface
    }
}

/**
 * @alias HTMLTFoot
 */
export { HTMLTFoot as TFoot }

/**
 * @param {*} [init]
 * @returns {HTMLTFoot}
 */
export function tfoot(init) {
    return new HTMLTFoot(init)
}

HTMLTFoot.register()
