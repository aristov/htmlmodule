import { HTMLElementAssembler } from './element'

export class Embed extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Embed}
 */
export function embed(...init) {
    return new Embed(...init)
}
