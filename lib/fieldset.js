import { HTMLElementAssembler } from './element'

const { HTMLFieldSetElement } = window

export class FieldSet extends HTMLElementAssembler {
    // todo
    /**
     * @returns {window.HTMLFieldSetElement}
     */
    static get interface() {
        return HTMLFieldSetElement
    }
}

/**
 * @param {*} [init]
 * @returns {FieldSet}
 */
export function fieldset(...init) {
    return new FieldSet(...init)
}
