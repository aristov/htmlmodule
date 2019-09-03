import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-small-element
 */
export class Small extends HTMLElementAssembler {}

export const HTMLSmall = Small

/**
 * @param {*} [init]
 * @returns {Small}
 */
export function small(init) {
    return new Small(init)
}

Small.register()
