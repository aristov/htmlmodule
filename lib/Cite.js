import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-cite-element
 */
export class Cite extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Cite}
 */
export function cite(init) {
    return new Cite(init)
}

Cite.register()
