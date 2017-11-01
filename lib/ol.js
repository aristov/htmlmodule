import { HTMLElementAssembler } from './element'

export class Ol extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Ol}
 */
export function ol(init) {
    return new Ol(init)
}
