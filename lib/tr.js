import { HTMLElementAssembler } from './element'
import { Td } from './td'
import { Th } from './th'

const { map } = Array.prototype
const { HTMLTableRowElement } = window

export class Tr extends HTMLElementAssembler {
    /**
     * @param {Number} [index]
     * @returns {Td}
     */
    insertCell(index) {
        return this.getInstanceOf(this.node.insertCell(index), Td)
    }

    /**
     * @param {Number} index
     */
    deleteCell(index) {
        this.node.deleteCell(index)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        return this.node.rowIndex
    }

    /**
     * @returns {Number}
     */
    get sectionRowIndex() {
        return this.node.sectionRowIndex
    }

    /**
     * @returns {(Td|Th)[]}
     */
    get cells() {
        return map.call(this.node.cells, node => {
            const assembler = node.tagName === 'TH'? Th : Td
            return this.getInstanceOf(node, assembler)
        })
    }

    /**
     * @returns {window.HTMLTableRowElement}
     */
    static get interface() {
        return HTMLTableRowElement
    }
}

/**
 * @param {*} [init]
 * @returns {Tr}
 */
export function tr(init) {
    return new Tr(init)
}
