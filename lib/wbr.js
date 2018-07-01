import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-wbr-element
 */
export class Wbr extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Wbr}
 */
export function wbr(init) {
    return new Wbr(init)
}

Wbr.register()
