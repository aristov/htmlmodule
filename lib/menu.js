import { HTMLElementAssembler } from './element'

export class Menu extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Menu}
 */
export function menu(...init) {
    return new Menu(...init)
}
