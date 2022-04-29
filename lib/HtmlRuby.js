import { HtmlElem } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ruby-element
 */
export class HTMLRuby extends HtmlElem {}

/**
 * @alias HTMLRuby
 */
export { HTMLRuby as Ruby }

/**
 * @param {*} [init]
 * @returns {HTMLRuby}
 */
export function ruby(init) {
    return new HTMLRuby(init)
}

HTMLRuby.register()
