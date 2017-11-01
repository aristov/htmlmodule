import { HTMLElementAssembler } from './element'

export class Rp extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Rp}
 */
export function rp(...init) {
    return new Rp(...init)
}
