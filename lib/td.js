import { HTMLElementAssembler } from './element'

const { HTMLTableCellElement } = window

export class Td extends HTMLElementAssembler {
    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.node.colSpan
    }
    
    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.node.rowSpan
    }

    /**
     * @param {Th[]} headers
     */
    set headers(headers) {
        this.node.headers = headers.map(({ id }) => id).join(' ')
    }

    /**
     * @returns {Th[]}
     */
    get headers() {
        const headers = this.node.headers
        return headers?
            headers.split(' ').map(id => {
                const node = document.getElementById(id)
                return node && this.getInstance(node/*, Th*/) // fixme
            }) : []
    }

    /**
     * @returns {Number}
     */
    get cellIndex() {
        return this.node.cellIndex
    }

    /**
     * @returns {window.HTMLTableCellElement}
     */
    static get interface() {
        return HTMLTableCellElement
    }
}

/**
 * @param {*} [init]
 * @returns {Td}
 */
export function td(...init) {
    return new Td(...init)
}
