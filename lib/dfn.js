import { HTMLElementAssembler } from './element'

export class Dfn extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dfn}
 */
export function dfn(...init) {
    return new Dfn(...init)
}
