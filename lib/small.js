import { HTMLElementAssembler } from './element'

export class Small extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Small}
 */
export function small(init) {
    return new Small(init)
}
