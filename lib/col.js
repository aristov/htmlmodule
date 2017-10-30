import { HTMLElementAssembler } from './element'

export class Col extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Col}
 */
export function col(...init) {
    return new Col(...init)
}
