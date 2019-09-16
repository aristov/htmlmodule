import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-header-element
 */
export class HTMLHeader extends HTMLElementAssembler {}

/**
 * @alias HTMLHeader
 */
export { HTMLHeader as Header }

/**
 * @param {*} [init]
 * @returns {HTMLHeader}
 */
export function header(init) {
    return new HTMLHeader(init)
}

HTMLHeader.register()
