import { HTMLTableCellAssembler } from './tablecell'

const { HTMLTableDataCellElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-td-element
 */
export class Td extends HTMLTableCellAssembler {
    /**
     * @returns {interface} HTMLTableDataCellElement
     * @override
     */
    static get interface() {
        return HTMLTableDataCellElement || super.interface
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
