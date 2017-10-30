import { HTMLElementAssembler } from './element'

export class Track extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Track}
 */
export function track(...init) {
    return new Track(...init)
}
