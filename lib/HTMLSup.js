import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sup-element
 */
export class HTMLSup extends HTMLElementAssembler {}

/**
 * @alias HTMLSup
 */
export { HTMLSup as Sup }

/**
 * @param {*} [init]
 * @returns {HTMLSup}
 */
export function sup(init) {
    return new HTMLSup(init)
}

HTMLSup.register()
