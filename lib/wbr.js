import { HTMLElementAssembler } from './element'

export class Wbr extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Wbr}
 */
export function wbr(init) {
    return new Wbr(init)
}

Wbr.register()
