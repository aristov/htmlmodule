import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-header-element
 */
export class Header extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Header}
 */
export function header(init) {
    return new Header(init)
}

Header.register()
