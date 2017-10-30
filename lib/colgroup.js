import { HTMLElementAssembler } from './element'

export class ColGroup extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {ColGroup}
 */
export function colgroup(...init) {
    return new ColGroup(...init)
}
