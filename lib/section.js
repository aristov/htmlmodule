import { HTMLElementAssembler } from './element'

export class Section extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Section}
 */
export function section(init) {
    return new Section(init)
}
