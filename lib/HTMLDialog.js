import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLDialogElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dialog-element
 */
export class HTMLDialog extends HTMLElementAssembler {
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
     * @param {string} returnValue
     */
    close(returnValue) {
        this.node.close(returnValue)
    }

    /**
     * @param {boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {boolean}
     */
    get open() {
        return this.node.open
    }

    /**
     * @param {string} returnValue
     */
    set returnValue(returnValue) {
        this.node.returnValue = returnValue
    }

    /**
     * @returns {string} 
     */
    get returnValue() {
        return this.node.returnValue
    }

    /**
     * @returns {interface} HTMLDialogElement
     * @override
     */
    static get interface() {
        return HTMLDialogElement || super.interface
    }
}

/**
 * @alias HTMLDialog
 */
export { HTMLDialog as Dialog }

/**
 * @param {*} [init]
 * @returns {HTMLDialog}
 */
export function dialog(init) {
    return new HTMLDialog(init)
}

HTMLDialog.register()
