import { HTMLElementAssembler } from './element'

export class B extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {B}
 */
export function b(init) {
    return new B(init)
}

B.register()
