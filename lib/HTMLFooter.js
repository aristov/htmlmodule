import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-footer-element
 */
export class HTMLFooter extends HTMLElementAssembler {}

/**
 * @alias HTMLFooter
 */
export { HTMLFooter as Footer }

/**
 * @param {*} [init]
 * @returns {HTMLFooter}
 */
export function footer(init) {
    return new HTMLFooter(init)
}

HTMLFooter.register()
