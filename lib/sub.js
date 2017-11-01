import { HTMLElementAssembler } from './element'

export class Sub extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Sub}
 */
export function sub(...init) {
    return new Sub(...init)
}
