import { HTMLElementAssembler } from './element'

export class Nav extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Nav}
 */
export function nav(...init) {
    return new Nav(...init)
}
