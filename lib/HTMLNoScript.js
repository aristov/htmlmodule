import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-noscript-element
 */
export class HTMLNoScript extends HTMLElementAssembler {}

/**
 * @alias HTMLNoScript
 */
export { HTMLNoScript as NoScript }

/**
 * @param {*} [init]
 * @returns {HTMLNoScript}
 */
export function noscript(init) {
    return new HTMLNoScript(init)
}

HTMLNoScript.register()
