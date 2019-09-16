import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-figcaption-element
 */
export class HTMLFigCaption extends HTMLElementAssembler {}

/**
 * @alias HTMLFigCaption
 */
export { HTMLFigCaption as FigCaption }

/**
 * @param {*} [init]
 * @returns {HTMLFigCaption}
 */
export function figcaption(init) {
    return new HTMLFigCaption(init)
}

HTMLFigCaption.register()
