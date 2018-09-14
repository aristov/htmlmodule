import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLTableRowElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tr-element
 */
export class Tr extends HTMLElementAssembler {
    /**
     * @param {number} [index]
     * @returns {Td}
     */
    insertCell(index) {
        return this.getInstanceOf(this.node.insertCell(index))
    }

    /**
     * @param {number} index
     */
    deleteCell(index) {
        this.node.deleteCell(index)
    }

    /**
     * @returns {number}
     */
    get rowIndex() {
        return this.node.rowIndex
    }

    /**
     * @returns {number}
     */
    get sectionRowIndex() {
        return this.node.sectionRowIndex
    }

    /**
     * @returns {array.Td|array.Th}
     */
    get cells() {
        return map.call(this.node.cells, node => this.getInstanceOf(node))
    }

    /**
     * @returns {interface} HTMLTableRowElement
     * @override
     */
    static get interface() {
        return HTMLTableRowElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Tr}
 */
export function tr(init) {
    return new Tr(init)
}

Tr.register()
