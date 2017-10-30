import { HTMLElementAssembler } from './element'

export class Picture extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Picture}
 */
export function picture(...init) {
    return new Picture(...init)
}
