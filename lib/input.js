import { HTMLElementAssembler } from './html'

export class Input extends HTMLElementAssembler {
    set value(value) {
        this.node.value = value
    }

    get value() {
        return this.node.value
    }

    set type(type) {
        this.node.type = type
    }

    get type() {
        return this.node.type
    }

    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    get readOnly() {
        return this.node.readOnly
    }
}

/**
 * @param {*} init
 * @returns {Input}
 */
export function input(init) {
    return new Input(init)
}
