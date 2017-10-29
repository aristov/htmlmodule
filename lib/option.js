import { HTMLElementAssembler } from './element'

export class Option extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Option}
 */
export function option(init) {
    return new Option(init)
}
