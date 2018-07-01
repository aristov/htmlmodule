import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-figure-element
 */
export class Figure extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Figure}
 */
export function figure(init) {
    return new Figure(init)
}

Figure.register()
