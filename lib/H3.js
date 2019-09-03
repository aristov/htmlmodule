import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h3-element
 */
export class H3 extends HTMLElementAssembler {}

export const HTMLH3 = H3

/**
 * @param {*} [init]
 * @returns {H3}
 */
export function h3(init) {
    return new H3(init)
}

H3.register()
