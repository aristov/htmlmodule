import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-rp-element
 */
export class Rp extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Rp}
 */
export function rp(init) {
    return new Rp(init)
}

Rp.register()
