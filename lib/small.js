import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-small-element
 */
export class Small extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Small}
 */
export function small(init) {
    return new Small(init)
}

Small.register()
