import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-samp-element
 */
export class HTMLSamp extends HTMLElementAssembler {}

/**
 * @alias HTMLSamp
 */
export { HTMLSamp as Samp }

/**
 * @param {*} [init]
 * @returns {HTMLSamp}
 */
export function samp(init) {
    return new HTMLSamp(init)
}

HTMLSamp.register()
