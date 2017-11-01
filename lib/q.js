import { HTMLElementAssembler } from './element'

export class Q extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Q}
 */
export function q(...init) {
    return new Q(...init)
}
