import { HTMLElementAssembler } from './element'

export class Area extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Area}
 */
export function area(...init) {
    return new Area(...init)
}
