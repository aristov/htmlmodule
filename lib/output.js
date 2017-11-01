import { HTMLElementAssembler } from './element'

export class Output extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Output}
 */
export function output(...init) {
    return new Output(...init)
}
