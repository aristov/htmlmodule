import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-em-element
 */
export class HTMLEm extends HTMLElementAssembler {}

/**
 * @alias HTMLEm
 */
export { HTMLEm as Em }

/**
 * @param {*} [init]
 * @returns {HTMLEm}
 */
export function em(init) {
    return new HTMLEm(init)
}

HTMLEm.register()
