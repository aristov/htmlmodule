import { HTMLElementAssembler } from './element'

const { HTMLOptGroupElement } = window

export class OptGroup extends HTMLElementAssembler {
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

OptGroup.register()
