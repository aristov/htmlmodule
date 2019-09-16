import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-figure-element
 */
export class HTMLFigure extends HTMLElementAssembler {}

/**
 * @alias HTMLFigure
 */
export { HTMLFigure as Figure }

/**
 * @param {*} [init]
 * @returns {HTMLFigure}
 */
export function figure(init) {
    return new HTMLFigure(init)
}

HTMLFigure.register()
