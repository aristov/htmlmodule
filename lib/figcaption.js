import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-figcaption-element
 */
export class FigCaption extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {FigCaption}
 */
export function figcaption(init) {
    return new FigCaption(init)
}

FigCaption.register()
