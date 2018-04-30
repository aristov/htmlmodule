import { HTMLElementAssembler } from './element'

export class Code extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Code}
 */
export function code(init) {
    return new Code(init)
}
