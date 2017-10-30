import { HTMLElementAssembler } from './element'

export class U extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {U}
 */
export function u(...init) {
    return new U(...init)
}
