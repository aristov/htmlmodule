import { HTMLElementAssembler } from './element'

export class Time extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Time}
 */
export function time(...init) {
    return new Time(...init)
}
