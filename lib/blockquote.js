import { HTMLElementAssembler } from './element'

export class BlockQuote extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {BlockQuote}
 */
export function blockquote(...init) {
    return new BlockQuote(...init)
}
