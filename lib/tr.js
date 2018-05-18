import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLTableRowElement } = window

export class Tr extends HTMLElementAssembler {
    /**
     * @param {Number} [index]
     * @returns {Td}
     */
    insertCell(index) {
        return this.getInstanceOf(this.node.insertCell(index))
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
            return this.getInstanceOf(node)
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

Tr.register()
