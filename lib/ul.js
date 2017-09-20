import { HTMLElementAssembler } from './html'

export class Ul extends HTMLElementAssembler {}

/**
 * @param {*} init
 * @returns {Ul}
 */
export function ul(init) {
    return new Ul(init)
}
