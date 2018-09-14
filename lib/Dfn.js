import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dfn-element
 */
export class Dfn extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dfn}
 */
export function dfn(init) {
    return new Dfn(init)
}

Dfn.register()
