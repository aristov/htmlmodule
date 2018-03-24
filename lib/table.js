import { HTMLElementAssembler } from './element'
import { Caption } from './caption'
import { THead } from './thead'
import { TFoot } from './tfoot'
import { TBody } from './tbody'
import { Tr } from './tr'

const { map } = Array.prototype
const { HTMLTableElement } = window

export class Table extends HTMLElementAssembler {
    /**
     * @returns {HTMLTableCaptionElement}
     */
    createCaption() {
        return this.getInstanceOf(this.node.createCaption(), Caption)
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
        return this.getInstanceOf(this.node.createTHead(), THead)
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
        return this.getInstanceOf(this.node.createTFoot(), TFoot)
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
        return this.getInstanceOf(this.node.createTBody(), TBody)
    }

    /**
     * @param {Number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstanceOf(this.node.insertRow(index), Tr)
    }

    /**
     * @param {Number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @param {*} caption {Caption|HTMLTableCaptionElement|String}
     */
    set caption(caption) {
        const node = this.node
        if(caption instanceof Caption) {
            node.caption = caption.node
        }
        else if(typeof caption === 'string') {
            node.caption = new Caption(caption)
        }
        else node.caption = caption
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
        this.node.tHead = tHead instanceof THead?
            tHead.node :
            tHead
    }

    /**
     * @returns {THead}
     */
    get tHead() {
        return this.getInstanceOf(this.node.tHead, THead)
    }

    /**
     * @param {*} tFoot {TFoot|HTMLTableSectionElement}
     */
    set tFoot(tFoot) {
        this.node.tFoot = tFoot instanceof TFoot?
            tFoot.node :
            tFoot
    }

    /**
     * @returns {TFoot}
     */
    get tFoot() {
        return this.getInstanceOf(this.node.tFoot, TFoot)
    }

    /**
     * @returns {TBody[]}
     */
    get tBodies() {
        return map.call(this.node.tBodies, node => {
            return this.getInstanceOf(node, TBody)
        })
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => {
            return this.getInstanceOf(node, Tr)
        })
    }

    /**
     * @returns {window.HTMLTableElement}
     */
    static get interface() {
        return HTMLTableElement
    }
}

/**
 * @param {*} [init]
 * @returns {Table}
 */
export function table(init) {
    return new Table(init)
}
