import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dd-element
 */
export class Dd extends HTMLElementAssembler {}

export const HTMLDd = Dd

/**
 * @param {*} [init]
 * @returns {Dd}
 */
export function dd(init) {
    return new Dd(init)
}

Dd.register()
