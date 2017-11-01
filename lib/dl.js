import { HTMLElementAssembler } from './element'

export class Dl extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dl}
 */
export function dl(...init) {
    return new Dl(...init)
}
