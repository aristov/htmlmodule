import { HTMLElementAssembler } from './element'

export class Cite extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Cite}
 */
export function cite(...init) {
    return new Cite(...init)
}
