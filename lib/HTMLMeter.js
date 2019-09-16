import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLMeterElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-meter-element
 */
export class HTMLMeter extends HTMLElementAssembler {
    /**
     * @param {number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {number} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {number}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {number} low
     */
    set low(low) {
        this.node.low = low
    }

    /**
     * @returns {number}
     */
    get low() {
        return this.node.low
    }

    /**
     * @param {number} high
     */
    set high(high) {
        this.node.high = high
    }

    /**
     * @returns {number}
     */
    get high() {
        return this.node.high
    }

    /**
     * @param {number} optimum
     */
    set optimum(optimum) {
        this.node.optimum = optimum
    }

    /**
     * @returns {number}
     */
    get optimum() {
        return this.node.optimum
    }

    /**
     * @returns {array.Label|array.HTMLElementAssembler}
     */
    get labels() {
        return map.call(this.node.labels, node => this.getInstanceOf(node))
    }

    /**
     * @returns {interface} HTMLMeterElement
     * @override
     */
    static get interface() {
        return HTMLMeterElement || super.interface
    }
}

/**
 * @alias HTMLMeter
 */
export { HTMLMeter as Meter }

/**
 * @param {*} [init]
 * @returns {HTMLMeter}
 */
export function meter(init) {
    return new HTMLMeter(init)
}

HTMLMeter.register()
