import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-code-element
 */
export class HTMLCode extends HtmlElem {}

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
