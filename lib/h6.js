import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h6-element
 */
export class H6 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H6}
 */
export function h6(init) {
    return new H6(init)
}

H6.register()
