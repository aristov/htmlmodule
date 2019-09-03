import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-abbr-element
 */
export class Abbr extends HTMLElementAssembler {}

export const HTMLAbbr = Abbr

/**
 * @param {*} [init]
 * @returns {Abbr}
 */
export function abbr(init) {
    return new Abbr(init)
}

Abbr.register()
