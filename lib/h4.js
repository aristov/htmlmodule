import { HTMLElementAssembler } from './element'

export class H4 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H4}
 */
export function h4(init) {
    return new H4(init)
}
