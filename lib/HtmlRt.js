import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-rt-element
 */
export class HTMLRt extends HtmlElem {}

/**
 * @alias HTMLRt
 */
export { HTMLRt as Rt }

/**
 * @param {*} [init]
 * @returns {HTMLRt}
 */
export function rt(init) {
    return new HTMLRt(init)
}

HTMLRt.register()
