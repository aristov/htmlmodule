import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-b-element
 */
export class B extends HTMLElementAssembler {}

export const HTMLB = B

/**
 * @param {*} [init]
 * @returns {B}
 */
export function b(init) {
    return new B(init)
}

B.register()
