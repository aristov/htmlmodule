import { HTMLElementAssembler } from './element'

const { HTMLLegendElement } = window

export class Legend extends HTMLElementAssembler {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
    }

    /**
     * @returns {window.HTMLLegendElement}
     */
    static get interface() {
        return HTMLLegendElement
    }
}

/**
 * @param {*} [init]
 * @returns {Legend}
 */
export function legend(init) {
    return new Legend(init)
}

Legend.register()
