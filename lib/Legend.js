import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLLegendElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-legend-element
 */
export class Legend extends HTMLElementAssembler {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
    }

    /**
     * @returns {interface} HTMLLegendElement
     * @override
     */
    static get interface() {
        return HTMLLegendElement || super.interface
    }
}

export const HTMLLegend = Legend

/**
 * @param {*} [init]
 * @returns {Legend}
 */
export function legend(init) {
    return new Legend(init)
}

Legend.register()
