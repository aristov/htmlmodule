import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-strong-element
 */
export class HTMLStrong extends HTMLElementAssembler {}

/**
 * @alias HTMLStrong
 */
export { HTMLStrong as Strong }

/**
 * @param {*} [init]
 * @returns {HTMLStrong}
 */
export function strong(init) {
    return new HTMLStrong(init)
}

HTMLStrong.register()
