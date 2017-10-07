import { HTMLElementAssembler } from './html'

export class P extends HTMLElementAssembler {}

/**
 * @param {{}} init
 * @returns {P}
 */
export function p(init) {
    return new P(init)
}
