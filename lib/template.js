import { HTMLElementAssembler } from './element'

export class Template extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Template}
 */
export function template(...init) {
    return new Template(...init)
}
