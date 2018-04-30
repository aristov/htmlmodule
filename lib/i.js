import { HTMLElementAssembler } from './element'

export class I extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {I}
 */
export function i(init) {
    return new I(init)
}
