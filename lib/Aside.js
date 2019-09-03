import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-aside-element
 */
export class Aside extends HTMLElementAssembler {}

export const HTMLAside = Aside

/**
 * @param {*} [init]
 * @returns {Aside}
 */
export function aside(init) {
    return new Aside(init)
}

Aside.register()
