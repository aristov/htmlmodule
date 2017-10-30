import { HTMLElementAssembler } from './element'

export class Pre extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Pre}
 */
export function pre(...init) {
    return new Pre(...init)
}
