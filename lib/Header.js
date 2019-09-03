import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-header-element
 */
export class Header extends HTMLElementAssembler {}

export const HTMLHeader = Header

/**
 * @param {*} [init]
 * @returns {Header}
 */
export function header(init) {
    return new Header(init)
}

Header.register()
