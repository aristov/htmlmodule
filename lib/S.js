import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-s-element
 */
export class S extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {S}
 */
export function s(init) {
    return new S(init)
}

S.register()
