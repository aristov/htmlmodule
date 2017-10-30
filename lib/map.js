import { HTMLElementAssembler } from './element'

export class Map extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Map}
 */
export function map(...init) {
    return new Map(...init)
}
