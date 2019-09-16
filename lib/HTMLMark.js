import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-mark-element
 */
export class HTMLMark extends HTMLElementAssembler {}

/**
 * @alias HTMLMark
 */
export { HTMLMark as Mark }

/**
 * @param {*} [init]
 * @returns {HTMLMark}
 */
export function mark(init) {
    return new HTMLMark(init)
}

HTMLMark.register()
