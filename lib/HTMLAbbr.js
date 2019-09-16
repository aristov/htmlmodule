import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-abbr-element
 */
export class HTMLAbbr extends HTMLElementAssembler {}

/**
 * @alias HTMLAbbr
 */
export { HTMLAbbr as Abbr }

/**
 * @param {*} [init]
 * @returns {HTMLAbbr}
 */
export function abbr(init) {
    return new HTMLAbbr(init)
}

HTMLAbbr.register()
