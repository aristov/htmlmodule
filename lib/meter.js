import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLMeterElement } = window

export class Meter extends HTMLElementAssembler {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Number} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {Number}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {Number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {Number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {Number} low
     */
    set low(low) {
        this.node.low = low
    }

    /**
     * @returns {Number}
     */
    get low() {
        return this.node.low
    }

    /**
     * @param {Number} high
     */
    set high(high) {
        this.node.high = high
    }

    /**
     * @returns {Number}
     */
    get high() {
        return this.node.high
    }

    /**
     * @param {Number} optimum
     */
    set optimum(optimum) {
        this.node.optimum = optimum
    }

    /**
     * @returns {Number}
     */
    get optimum() {
        return this.node.optimum
    }

    /**
     * @returns {(Label|HTMLElementAssembler)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @returns {window.HTMLMeterElement}
     */
    static get interface() {
        return HTMLMeterElement
    }
}

/**
 * @param {*} [init]
 * @returns {Meter}
 */
export function meter(init) {
    return new Meter(init)
}

Meter.register()
