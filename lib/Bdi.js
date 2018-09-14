import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-bdi-element
 */
export class Bdi extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Bdi}
 */
export function bdi(init) {
    return new Bdi(init)
}

Bdi.register()
