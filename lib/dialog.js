import { HTMLElementAssembler } from './element'

const { HTMLDialogElement } = window

export class Dialog extends HTMLElementAssembler {
    /**
     * @param {MouseEvent|Element} [anchor]
     */
    show(anchor) {
        this.node.show(anchor)
    }

    /**
     * @param {MouseEvent|Element} [anchor]
     */
    showModal(anchor) {
        this.node.showModal(anchor)
    }

    /**
     * @param {String} returnValue
     */
    close(returnValue) {
        this.node.close(returnValue)
    }

    /**
     * @param {Boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {Boolean}
     */
    get open() {
        return this.node.open
    }

    /**
     * @param {String} returnValue
     */
    set returnValue(returnValue) {
        this.node.returnValue = returnValue
    }

    /**
     * @returns {String} 
     */
    get returnValue() {
        return this.node.returnValue
    }

    /**
     * @returns {window.HTMLDialogElement}
     */
    static get interface() {
        return HTMLDialogElement
    }
}

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
export function dialog(init) {
    return new Dialog(init)
}
