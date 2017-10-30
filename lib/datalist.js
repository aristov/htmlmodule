import { HTMLElementAssembler } from './element'

export class DataList extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {DataList}
 */
export function datalist(...init) {
    return new DataList(...init)
}
