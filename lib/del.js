import { HTMLElementAssembler } from './element'

export class Del extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Del}
 */
export function del(...init) {
    return new Del(...init)
}
