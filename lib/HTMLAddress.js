import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-address-element
 */
export class HTMLAddress extends HTMLElementAssembler {}

/**
 * @alias HTMLAddress
 */
export { HTMLAddress as Address }

/**
 * @param {*} [init]
 * @returns {HTMLAddress}
 */
export function address(init) {
    return new HTMLAddress(init)
}

HTMLAddress.register()
