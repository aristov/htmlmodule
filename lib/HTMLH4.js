import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h4-element
 */
export class HTMLH4 extends HTMLElementAssembler {}

/**
 * @alias HTMLH4
 */
export { HTMLH4 as H4 }

/**
 * @param {*} [init]
 * @returns {HTMLH4}
 */
export function h4(init) {
    return new HTMLH4(init)
}

HTMLH4.register()
