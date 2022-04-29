import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-wbr-element
 */
export class HTMLWbr extends HtmlElem {}

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
