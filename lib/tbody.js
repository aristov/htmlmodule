import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLTableSectionElement } = window

export class TBody extends HTMLElementAssembler {
    /**
     * @param {Number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstanceOf(this.node.insertRow(index))
    }

    /**
     * @param {Number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @returns {window.HTMLTableSectionElement}
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}

/**
 * @param {*} [init]
 * @returns {TBody}
 */
export function tbody(init) {
    return new TBody(init)
}

TBody.register()
