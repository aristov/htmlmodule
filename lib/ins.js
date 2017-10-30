import { HTMLElementAssembler } from './element'

export class Ins extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Ins}
 */
export function ins(...init) {
    return new Ins(...init)
}
