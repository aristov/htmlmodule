import { HTMLElementAssembler } from './html'

export class H1 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H1}
 */
export function h1(init) {
    return new H1(init)
}

