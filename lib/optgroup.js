import { HTMLElementAssembler } from './element'

export class OptGroup extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {OptGroup}
 */
export function optgroup(...init) {
    return new OptGroup(...init)
}
