import { HTMLElementAssembler } from './element'

export class Progress extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Progress}
 */
export function progress(...init) {
    return new Progress(...init)
}
