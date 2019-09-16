import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dfn-element
 */
export class HTMLDfn extends HTMLElementAssembler {}

/**
 * @alias HTMLDfn
 */
export { HTMLDfn as Dfn }

/**
 * @param {*} [init]
 * @returns {HTMLDfn}
 */
export function dfn(init) {
    return new HTMLDfn(init)
}

HTMLDfn.register()
