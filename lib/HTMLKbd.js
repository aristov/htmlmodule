import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-kbd-element
 */
export class HTMLKbd extends HTMLElementAssembler {}

/**
 * @alias HTMLKbd
 */
export { HTMLKbd as Kbd }

/**
 * @param {*} [init]
 * @returns {HTMLKbd}
 */
export function kbd(init) {
    return new HTMLKbd(init)
}

HTMLKbd.register()
