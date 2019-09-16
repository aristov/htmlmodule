import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ruby-element
 */
export class HTMLRuby extends HTMLElementAssembler {}

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
