import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLTableElement } = window
const { getNodeOf } = HTMLElementAssembler

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-table-element
 */
export class HTMLTable extends HTMLElementAssembler {
    /**
     * @returns {HTMLTableCaptionElement}
     */
    createCaption() {
        return this.getInstanceOf(this.node.createCaption())
    }

    /**
     * Delete the table caption
     */
    deleteCaption() {
        this.node.deleteCaption()
    }
    
    /**
     * @returns {HTMLTableSectionElement}
     */
    createTHead() {
        return this.getInstanceOf(this.node.createTHead())
    }

    /**
     * Delete the table caption
     */
    deleteTHead() {
        this.node.deleteTHead()
    }

    /**
     * @returns {HTMLTableSectionElement}
     */
    createTFoot() {
        return this.getInstanceOf(this.node.createTFoot())
    }

    /**
     * Delete the table caption
     */
    deleteTFoot() {
        this.node.deleteTFoot()
    }

    /**
     * @returns {HTMLTableSectionElement}
     */
    createTBody() {
        return this.getInstanceOf(this.node.createTBody())
    }

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
     * @param {*} caption {Caption|HTMLTableCaptionElement}
     */
    set caption(caption) {
        this.node.caption = getNodeOf(caption)
    }

    /**
     * @returns {HTMLTableCaptionElement}
     */
    get caption() {
        return this.node.caption
    }

    /**
     * @param {*} tHead {THead|HTMLTableSectionElement}
     */
    set tHead(tHead) {
        this.node.tHead = getNodeOf(tHead)
    }

    /**
     * @returns {THead}
     */
    get tHead() {
        return this.getInstanceOf(this.node.tHead)
    }

    /**
     * @param {*} tFoot {TFoot|HTMLTableSectionElement}
     */
    set tFoot(tFoot) {
        this.node.tFoot = getNodeOf(tFoot)
    }

    /**
     * @returns {TFoot}
     */
    get tFoot() {
        return this.getInstanceOf(this.node.tFoot)
    }

    /**
     * @returns {TBody[]}
     */
    get tBodies() {
        return map.call(this.node.tBodies, node => this.getInstanceOf(node))
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => this.getInstanceOf(node))
    }

    /**
     * @returns {interface} HTMLTableElement
     * @override
     */
    static get interface() {
        return HTMLTableElement || super.interface
    }
}

/**
 * @alias HTMLTable
 */
export { HTMLTable as Table }

/**
 * @param {*} [init]
 * @returns {HTMLTable}
 */
export function table(init) {
    return new HTMLTable(init)
}

HTMLTable.register()
