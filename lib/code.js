import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-code-element
 */
export class Code extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Code}
 */
export function code(init) {
    return new Code(init)
}

Code.register()
