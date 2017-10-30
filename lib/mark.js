import { HTMLElementAssembler } from './element'

export class Mark extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Mark}
 */
export function mark(...init) {
    return new Mark(...init)
}
