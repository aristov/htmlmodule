import { HTMLElementAssembler } from './element'

export class Audio extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Audio}
 */
export function audio(...init) {
    return new Audio(...init)
}
