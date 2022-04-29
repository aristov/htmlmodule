import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-bdi-element
 */
export class HTMLBdi extends HtmlElem {}

/**
 * @alias HTMLBdi
 */
export { HTMLBdi as Bdi }

/**
 * @param {*} [init]
 * @returns {HTMLBdi}
 */
export function bdi(init) {
    return new HTMLBdi(init)
}

HTMLBdi.register()
