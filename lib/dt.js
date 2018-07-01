import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dt-element
 */
export class Dt extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Dt}
 */
export function dt(init) {
    return new Dt(init)
}

Dt.register()
