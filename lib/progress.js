import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLProgressElement } = window

export class Progress extends HTMLElementAssembler {
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
     * @returns {Number}
     */
    get position() {
        return this.node.position
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @returns {window.HTMLProgressElement}
     */
    static get interface() {
        return HTMLProgressElement
    }
}

/**
 * @param {*} [init]
 * @returns {Progress}
 */
export function progress(init) {
    return new Progress(init)
}

Progress.register()
