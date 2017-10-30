import { HTMLElementAssembler } from './element'

export class Source extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Source}
 */
export function source(...init) {
    return new Source(...init)
}
