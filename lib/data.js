import { HTMLElementAssembler } from './element'

export class Data extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Data}
 */
export function data(...init) {
    return new Data(...init)
}
