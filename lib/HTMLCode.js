import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-code-element
 */
export class HTMLCode extends HTMLElementAssembler {}

/**
 * @alias HTMLCode
 */
export { HTMLCode as Code }

/**
 * @param {*} [init]
 * @returns {HTMLCode}
 */
export function code(init) {
    return new HTMLCode(init)
}

HTMLCode.register()
