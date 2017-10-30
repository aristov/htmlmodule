import { HTMLElementAssembler } from './element'

export class TBody extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {TBody}
 */
export function tbody(...init) {
    return new TBody(...init)
}
