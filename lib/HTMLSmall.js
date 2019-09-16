import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-small-element
 */
export class HTMLSmall extends HTMLElementAssembler {}

/**
 * @alias HTMLSmall
 */
export { HTMLSmall as Small }

/**
 * @param {*} [init]
 * @returns {HTMLSmall}
 */
export function small(init) {
    return new HTMLSmall(init)
}

HTMLSmall.register()
