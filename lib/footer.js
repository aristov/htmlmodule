import { HTMLElementAssembler } from './element'

export class Footer extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Footer}
 */
export function footer(...init) {
    return new Footer(...init)
}
