import { HTMLElementAssembler } from './element'

export class Bdo extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Bdo}
 */
export function bdo(init) {
    return new Bdo(init)
}

Bdo.register()
