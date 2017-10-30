import { HTMLElementAssembler } from './element'

export class Sup extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Sup}
 */
export function sup(...init) {
    return new Sup(...init)
}
