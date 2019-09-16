import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLLegendElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-legend-element
 */
export class HTMLLegend extends HTMLElementAssembler {
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

/**
 * @alias HTMLLegend
 */
export { HTMLLegend as Legend }

/**
 * @param {*} [init]
 * @returns {HTMLLegend}
 */
export function legend(init) {
    return new HTMLLegend(init)
}

HTMLLegend.register()
