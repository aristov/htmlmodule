import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-summary-element
 */
export class HTMLSummary extends HTMLElementAssembler {}

/**
 * @alias HTMLSummary
 */
export { HTMLSummary as Summary }

/**
 * @param {*} [init]
 * @returns {HTMLSummary}
 */
export function summary(init) {
    return new HTMLSummary(init)
}

HTMLSummary.register()
