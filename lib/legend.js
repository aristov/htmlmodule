import { HTMLElementAssembler } from './element'

export class Legend extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Legend}
 */
export function legend(...init) {
    return new Legend(...init)
}
