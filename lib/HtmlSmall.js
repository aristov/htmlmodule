import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-small-element
 */
export class HTMLSmall extends HtmlElem {}

/**
 * @alias HTMLSmall
 */
export { HTMLSmall as Small }

/**
 * @param {*} [init]
 * @returns {HTMLSmall}
 */
export function small(init) {
    return new HTMLSmall(init)
}

HTMLSmall.register()
