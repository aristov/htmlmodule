import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sub-element
 */
export class HTMLSub extends HtmlElem {}

/**
 * @alias HTMLSub
 */
export { HTMLSub as Sub }

/**
 * @param {*} [init]
 * @returns {HTMLSub}
 */
export function sub(init) {
    return new HTMLSub(init)
}

HTMLSub.register()
