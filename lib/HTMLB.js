import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-b-element
 */
export class HTMLB extends HTMLElementAssembler {}

/**
 * @alias HTMLB
 */
export { HTMLB as B }

/**
 * @param {*} [init]
 * @returns {HTMLB}
 */
export function b(init) {
    return new HTMLB(init)
}

HTMLB.register()
