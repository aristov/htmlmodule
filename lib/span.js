import { HTMLElementAssembler } from './html'

export class Span extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Span}
 */
export function span(init) {
    return new Span(init)
}