import { HTMLElementAssembler } from './element'

export class Figure extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Figure}
 */
export function figure(...init) {
    return new Figure(...init)
}
