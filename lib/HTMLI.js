import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-i-element
 */
export class HTMLI extends HTMLElementAssembler {}

/**
 * @alias HTMLI
 */
export { HTMLI as I }

/**
 * @param {*} [init]
 * @returns {HTMLI}
 */
export function i(init) {
    return new HTMLI(init)
}

HTMLI.register()
