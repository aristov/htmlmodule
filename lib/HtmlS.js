import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-s-element
 */
export class HTMLS extends HtmlElem {}

/**
 * @alias HTMLS
 */
export { HTMLS as S }

/**
 * @param {*} [init]
 * @returns {HTMLS}
 */
export function s(init) {
    return new HTMLS(init)
}

HTMLS.register()
