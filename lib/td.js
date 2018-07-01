import { HTMLElementAssembler } from './element'

const { HTMLTableCellElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-td-element
 */
export class Td extends HTMLElementAssembler {
    /**
     * @param {number} colSpan
     */
    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    /**
     * @returns {number}
     */
    get colSpan() {
        return this.node.colSpan
    }
    
    /**
     * @param {number} rowSpan
     */
    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    /**
     * @returns {number}
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
                return this.getInstanceOf(document.getElementById(id))
            }) : []
    }

    /**
     * @returns {number}
     */
    get cellIndex() {
        return this.node.cellIndex
    }

    /**
     * @returns {interface} HTMLTableCellElement
     * @override
     */
    static get interface() {
        return HTMLTableCellElement
    }
}

/**
 * @param {*} [init]
 * @returns {Td}
 */
export function td(init) {
    return new Td(init)
}

Td.register()
