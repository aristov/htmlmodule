import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-bdo-element
 */
export class HTMLBdo extends HTMLElementAssembler {}

/**
 * @alias HTMLBdo
 */
export { HTMLBdo as Bdo }

/**
 * @param {*} [init]
 * @returns {HTMLBdo}
 */
export function bdo(init) {
    return new HTMLBdo(init)
}

HTMLBdo.register()
