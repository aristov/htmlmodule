import { HTMLElementAssembler } from './element'

export class Script extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Script}
 */
export function script(...init) {
    return new Script(...init)
}
