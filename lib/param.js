import { HTMLElementAssembler } from './element'

export class Param extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Param}
 */
export function param(...init) {
    return new Param(...init)
}
