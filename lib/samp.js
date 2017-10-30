import { HTMLElementAssembler } from './element'

export class Samp extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Samp}
 */
export function samp(...init) {
    return new Samp(...init)
}
