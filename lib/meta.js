import { HTMLElementAssembler } from './element'

export class Meta extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Meta}
 */
export function meta(...init) {
    return new Meta(...init)
}
