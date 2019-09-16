import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h3-element
 */
export class HTMLH3 extends HTMLElementAssembler {}

/**
 * @alias HTMLH3
 */
export { HTMLH3 as H3 }

/**
 * @param {*} [init]
 * @returns {HTMLH3}
 */
export function h3(init) {
    return new HTMLH3(init)
}

HTMLH3.register()
