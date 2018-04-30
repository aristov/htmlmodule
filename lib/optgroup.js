import { HTMLElementAssembler } from './element'

const { HTMLOptGroupElement } = window

export class OptGroup extends HTMLElementAssembler {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String} 
     */
    get label() {
        return this.node.label
    }

    /**
     * @returns {window.HTMLOptGroupElement}
     */
    static get interface() {
        return HTMLOptGroupElement
    }
}

/**
 * @param {*} [init]
 * @returns {OptGroup}
 */
export function optgroup(init) {
    return new OptGroup(init)
}
