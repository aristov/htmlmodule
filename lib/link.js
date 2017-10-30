import { HTMLElementAssembler } from './element'

export class Link extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Link}
 */
export function link(...init) {
    return new Link(...init)
}
