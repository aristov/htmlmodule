import { HTMLElementAssembler } from './element'

export class Details extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Details}
 */
export function details(...init) {
    return new Details(...init)
}
