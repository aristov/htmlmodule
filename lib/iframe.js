import { HTMLElementAssembler } from './element'

export class IFrame extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {IFrame}
 */
export function iframe(...init) {
    return new IFrame(...init)
}
