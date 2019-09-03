import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-i-element
 */
export class I extends HTMLElementAssembler {}

export const HTMLI = I

/**
 * @param {*} [init]
 * @returns {I}
 */
export function i(init) {
    return new I(init)
}

I.register()
