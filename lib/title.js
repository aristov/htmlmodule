import { HTMLElementAssembler } from './element'

export class Title extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Title}
 */
export function title(...init) {
    return new Title(...init)
}
