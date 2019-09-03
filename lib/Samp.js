import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-samp-element
 */
export class Samp extends HTMLElementAssembler {}

export const HTMLSamp = Samp

/**
 * @param {*} [init]
 * @returns {Samp}
 */
export function samp(init) {
    return new Samp(init)
}

Samp.register()
