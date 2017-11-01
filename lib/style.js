import { HTMLElementAssembler } from './element'

export class Style extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Style}
 */
export function style(...init) {
    return new Style(...init)
}
