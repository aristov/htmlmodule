import { HTMLElementAssembler } from './element'

export class Tr extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Tr}
 */
export function tr(...init) {
    return new Tr(...init)
}
