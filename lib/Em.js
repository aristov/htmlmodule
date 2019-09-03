import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-em-element
 */
export class Em extends HTMLElementAssembler {}

export const HTMLEm = Em

/**
 * @param {*} [init]
 * @returns {Em}
 */
export function em(init) {
    return new Em(init)
}

Em.register()
