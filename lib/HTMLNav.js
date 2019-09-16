import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-nav-element
 */
export class HTMLNav extends HTMLElementAssembler {}

/**
 * @alias HTMLNav
 */
export { HTMLNav as Nav }

/**
 * @param {*} [init]
 * @returns {HTMLNav}
 */
export function nav(init) {
    return new HTMLNav(init)
}

HTMLNav.register()
