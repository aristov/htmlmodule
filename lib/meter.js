import { HTMLElementAssembler } from './element'

export class Meter extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Meter}
 */
export function meter(...init) {
    return new Meter(...init)
}
