import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h4-element
 */
export class H4 extends HTMLElementAssembler {}

export const HTMLH4 = H4

/**
 * @param {*} [init]
 * @returns {H4}
 */
export function h4(init) {
    return new H4(init)
}

H4.register()
