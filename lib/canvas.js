import { HTMLElementAssembler } from './element'

export class Canvas extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Canvas}
 */
export function canvas(...init) {
    return new Canvas(...init)
}
