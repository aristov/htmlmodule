import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h1-element
 */
export class HTMLH1 extends HTMLElementAssembler {}

/**
 * @alias HTMLH1
 */
export { HTMLH1 as H1 }

/**
 * @param {*} [init]
 * @returns {HTMLH1}
 */
export function h1(init) {
    return new HTMLH1(init)
}


HTMLH1.register()
