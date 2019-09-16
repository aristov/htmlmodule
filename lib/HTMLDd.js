import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dd-element
 */
export class HTMLDd extends HTMLElementAssembler {}

/**
 * @alias HTMLDd
 */
export { HTMLDd as Dd }

/**
 * @param {*} [init]
 * @returns {HTMLDd}
 */
export function dd(init) {
    return new HTMLDd(init)
}

HTMLDd.register()
