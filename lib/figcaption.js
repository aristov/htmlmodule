import { HTMLElementAssembler } from './element'

export class FigCaption extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {FigCaption}
 */
export function figcaption(init) {
    return new FigCaption(init)
}
