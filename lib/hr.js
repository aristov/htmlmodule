import { HTMLElementAssembler } from './element'

export class Hr extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Hr}
 */
export function hr(...init) {
    return new Hr(...init)
}
