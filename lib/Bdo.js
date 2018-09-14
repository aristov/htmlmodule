import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-bdo-element
 */
export class Bdo extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Bdo}
 */
export function bdo(init) {
    return new Bdo(init)
}

Bdo.register()
