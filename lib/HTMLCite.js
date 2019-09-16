import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-cite-element
 */
export class HTMLCite extends HTMLElementAssembler {}

/**
 * @alias HTMLCite
 */
export { HTMLCite as Cite }

/**
 * @param {*} [init]
 * @returns {HTMLCite}
 */
export function cite(init) {
    return new HTMLCite(init)
}

HTMLCite.register()
