import { HTMLElementAssembler } from './element'

export class TFoot extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {TFoot}
 */
export function tfoot(...init) {
    return new TFoot(...init)
}
