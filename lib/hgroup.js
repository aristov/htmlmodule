import { HTMLElementAssembler } from './element'

export class HGroup extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {HGroup}
 */
export function hgroup(init) {
    return new HGroup(init)
}
