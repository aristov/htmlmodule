import { HTMLElementAssembler } from './element'

export class Dt extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dt}
 */
export function dt(...init) {
    return new Dt(...init)
}
