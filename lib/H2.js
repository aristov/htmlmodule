import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h2-element
 */
export class H2 extends HTMLElementAssembler {}

export const HTMLH2 = H2

/**
 * @param {*} [init]
 * @returns {H2}
 */
export function h2(init) {
    return new H2(init)
}

H2.register()
