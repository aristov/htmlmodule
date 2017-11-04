import { HTMLElementAssembler } from './element'

const { HTMLInputElement } = window

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

    static get interface() {
        return HTMLInputElement
    }
}

['checked', 'disabled', 'required'].forEach(prop => {
    Object.defineProperty(Input.prototype, prop, {
        set(value) {
            this.node[prop] = value
        },
        get() {
            return this.node[prop]
        }
    })
})

/**
 * @param {*} [init]
 * @returns {Input}
 */
export function input(init) {
    return new Input(init)
}
