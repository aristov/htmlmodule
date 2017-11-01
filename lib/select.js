import { HTMLElementAssembler } from './element'

export class Select extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Select}
 */
export function select(init) {
    return new Select(init)
}
