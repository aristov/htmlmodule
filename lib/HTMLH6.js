import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h6-element
 */
export class HTMLH6 extends HTMLElementAssembler {}

/**
 * @alias HTMLH6
 */
export { HTMLH6 as H6 }

/**
 * @param {*} [init]
 * @returns {HTMLH6}
 */
export function h6(init) {
    return new HTMLH6(init)
}

HTMLH6.register()
