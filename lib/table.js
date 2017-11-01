import { HTMLElementAssembler } from './element'

export class Table extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Table}
 */
export function table(init) {
    return new Table(init)
}
