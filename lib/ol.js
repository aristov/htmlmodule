import { HTMLElementAssembler } from './html'

export class Ol extends HTMLElementAssembler {}

/**
 * @param {*} init
 * @returns {Ol}
 */
export function ol(init) {
    return new Ol(init)
}
