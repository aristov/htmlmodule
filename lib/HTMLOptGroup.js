import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLOptGroupElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-optgroup-element
 */
export class HTMLOptGroup extends HTMLElementAssembler {
    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return this.node.label
    }

    /**
     * @returns {interface} HTMLOptGroupElement
     * @override
     */
    static get interface() {
        return HTMLOptGroupElement || super.interface
    }
}

/**
 * @alias HTMLOptGroup
 */
export { HTMLOptGroup as OptGroup }

/**
 * @param {*} [init]
 * @returns {HTMLOptGroup}
 */
export function optgroup(init) {
    return new HTMLOptGroup(init)
}

HTMLOptGroup.register()
