import { HTMLElementAssembler } from './element'

export class Dialog extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
export function dialog(...init) {
    return new Dialog(...init)
}
