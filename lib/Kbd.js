import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-kbd-element
 */
export class Kbd extends HTMLElementAssembler {}

export const HTMLKbd = Kbd

/**
 * @param {*} [init]
 * @returns {Kbd}
 */
export function kbd(init) {
    return new Kbd(init)
}

Kbd.register()
