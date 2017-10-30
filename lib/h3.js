import { HTMLElementAssembler } from './element'

export class H3 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H3}
 */
export function h3(...init) {
    return new H3(...init)
}
