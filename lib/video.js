import { HTMLElementAssembler } from './element'

export class Video extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Video}
 */
export function video(...init) {
    return new Video(...init)
}
