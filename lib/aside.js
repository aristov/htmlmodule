import { HTMLElementAssembler } from './element'

export class Aside extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Aside}
 */
export function aside(...init) {
    return new Aside(...init)
}
