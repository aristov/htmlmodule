import { HTMLElementAssembler } from './element'

export class Caption extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Caption}
 */
export function caption(...init) {
    return new Caption(...init)
}
