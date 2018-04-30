import { HTMLElementAssembler } from './element'

export class Em extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Em}
 */
export function em(init) {
    return new Em(init)
}
