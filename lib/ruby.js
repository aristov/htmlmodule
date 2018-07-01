import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ruby-element
 */
export class Ruby extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Ruby}
 */
export function ruby(init) {
    return new Ruby(init)
}

Ruby.register()
