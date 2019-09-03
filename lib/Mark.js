import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-mark-element
 */
export class Mark extends HTMLElementAssembler {}

export const HTMLMark = Mark

/**
 * @param {*} [init]
 * @returns {Mark}
 */
export function mark(init) {
    return new Mark(init)
}

Mark.register()
