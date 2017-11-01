import { HTMLElementAssembler } from './element'

export class Address extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Address}
 */
export function address(...init) {
    return new Address(...init)
}
