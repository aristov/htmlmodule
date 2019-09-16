import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h5-element
 */
export class HTMLH5 extends HTMLElementAssembler {}

/**
 * @alias HTMLH5
 */
export { HTMLH5 as H5 }

/**
 * @param {*} [init]
 * @returns {HTMLH5}
 */
export function h5(init) {
    return new HTMLH5(init)
}

HTMLH5.register()
