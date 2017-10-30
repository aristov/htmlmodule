import { HTMLElementAssembler } from './element'

export class Head extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Head}
 */
export function head(...init) {
    return new Head(...init)
}
