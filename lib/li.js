import { HTMLElementAssembler } from './element'

export class Li extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Li}
 */
export function li(init) {
    return new Li(init)
}
