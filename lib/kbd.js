import { HTMLElementAssembler } from './element'

export class Kbd extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Kbd}
 */
export function kbd(init) {
    return new Kbd(init)
}

Kbd.register()
