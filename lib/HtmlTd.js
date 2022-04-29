import { HtmlTableCell } from './HtmlTableCell'

const { HTMLTableDataCellElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-td-element
 */
export class HTMLTd extends HtmlTableCell {
    /**
     * @returns {interface} HTMLTableDataCellElement
     * @override
     */
    static get interface() {
        return HTMLTableDataCellElement || super.interface
    }
}

/**
 * @alias HTMLTd
 */
export { HTMLTd as Td }

/**
 * @param {*} [init]
 * @returns {HTMLTd}
 */
export function td(init) {
    return new HTMLTd(init)
}

HTMLTd.register()
