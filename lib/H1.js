import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h1-element
 */
export class H1 extends HTMLElementAssembler {}

export const HTMLH1 = H1

/**
 * @param {*} [init]
 * @returns {H1}
 */
export function h1(init) {
    return new H1(init)
}


H1.register()
