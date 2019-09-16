import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dt-element
 */
export class HTMLDt extends HTMLElementAssembler {}

/**
 * @alias HTMLDt
 */
export { HTMLDt as Dt }

/**
 * @param {*} [init]
 * @returns {HTMLDt}
 */
export function dt(init) {
    return new HTMLDt(init)
}

HTMLDt.register()
