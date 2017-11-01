import { HTMLElementAssembler } from './element'

export class Br extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Br}
 */
export function br(...init) {
    return new Br(...init)
}
