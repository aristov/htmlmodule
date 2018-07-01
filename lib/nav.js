import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-nav-element
 */
export class Nav extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Nav}
 */
export function nav(init) {
    return new Nav(init)
}

Nav.register()
