import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-section-element
 */
export class HTMLSection extends HTMLElementAssembler {}

/**
 * @alias HTMLSection
 */
export { HTMLSection as Section }

/**
 * @param {*} [init]
 * @returns {HTMLSection}
 */
export function section(init) {
    return new HTMLSection(init)
}

HTMLSection.register()
