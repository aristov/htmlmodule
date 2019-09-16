import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-wbr-element
 */
export class HTMLWbr extends HTMLElementAssembler {}

/**
 * @alias HTMLWbr
 */
export { HTMLWbr as Wbr }

/**
 * @param {*} [init]
 * @returns {HTMLWbr}
 */
export function wbr(init) {
    return new HTMLWbr(init)
}

HTMLWbr.register()
