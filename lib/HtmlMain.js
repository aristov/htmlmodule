import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-main-element
 */
export class HTMLMain extends HtmlElem {}

/**
 * @alias HTMLMain
 */
export { HTMLMain as Main }

/**
 * @param {*} [init]
 * @returns {HTMLMain}
 */
export function main(init) {
    return new HTMLMain(init)
}

HTMLMain.register()
