import { HTMLElementAssembler } from './element'

export class THead extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {THead}
 */
export function thead(...init) {
    return new THead(...init)
}
