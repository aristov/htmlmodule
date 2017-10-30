import { HTMLElementAssembler } from './element'

export class Abbr extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Abbr}
 */
export function abbr(...init) {
    return new Abbr(...init)
}
