import { HTMLElementAssembler } from './element'

export class Td extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Td}
 */
export function td(...init) {
    return new Td(...init)
}
