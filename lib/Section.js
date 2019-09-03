import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-section-element
 */
export class Section extends HTMLElementAssembler {}

export const HTMLSection = Section

/**
 * @param {*} [init]
 * @returns {Section}
 */
export function section(init) {
    return new Section(init)
}

Section.register()
