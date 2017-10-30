import { HTMLElementAssembler } from './element'

export class Th extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Th}
 */
export function th(...init) {
    return new Th(...init)
}
