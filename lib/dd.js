import { HTMLElementAssembler } from './element'

export class Dd extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dd}
 */
export function dd(...init) {
    return new Dd(...init)
}
