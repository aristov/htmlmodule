import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dt-element
 */
export class Dt extends HTMLElementAssembler {}

export const HTMLDt = Dt

/**
 * @param {*} [init]
 * @returns {Dt}
 */
export function dt(init) {
    return new Dt(init)
}

Dt.register()
