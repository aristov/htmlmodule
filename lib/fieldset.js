import { HTMLElementAssembler } from './element'

export class FieldSet extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {FieldSet}
 */
export function fieldset(...init) {
    return new FieldSet(...init)
}
