import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h2-element
 */
export class HTMLH2 extends HTMLElementAssembler {}

/**
 * @alias HTMLH2
 */
export { HTMLH2 as H2 }

/**
 * @param {*} [init]
 * @returns {HTMLH2}
 */
export function h2(init) {
    return new HTMLH2(init)
}

HTMLH2.register()
