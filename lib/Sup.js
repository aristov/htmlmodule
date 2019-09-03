import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sup-element
 */
export class Sup extends HTMLElementAssembler {}

export const HTMLSup = Sup

/**
 * @param {*} [init]
 * @returns {Sup}
 */
export function sup(init) {
    return new Sup(init)
}

Sup.register()
