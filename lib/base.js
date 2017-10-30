import { HTMLElementAssembler } from './element'

export class Base extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Base}
 */
export function base(...init) {
    return new Base(...init)
}
