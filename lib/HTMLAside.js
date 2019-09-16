import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-aside-element
 */
export class HTMLAside extends HTMLElementAssembler {}

/**
 * @alias HTMLAside
 */
export { HTMLAside as Aside }

/**
 * @param {*} [init]
 * @returns {HTMLAside}
 */
export function aside(init) {
    return new HTMLAside(init)
}

HTMLAside.register()
