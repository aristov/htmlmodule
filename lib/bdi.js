import { HTMLElementAssembler } from './element'

export class Bdi extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Bdi}
 */
export function bdi(init) {
    return new Bdi(init)
}

Bdi.register()
