import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-rp-element
 */
export class HTMLRp extends HTMLElementAssembler {}

/**
 * @alias HTMLRp
 */
export { HTMLRp as Rp }

/**
 * @param {*} [init]
 * @returns {HTMLRp}
 */
export function rp(init) {
    return new HTMLRp(init)
}

HTMLRp.register()
