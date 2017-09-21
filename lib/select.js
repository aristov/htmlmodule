import { HTMLElementAssembler } from './html'

export class Select extends HTMLElementAssembler {}

/**
 * @param {*} init
 * @returns {Select}
 */
export function select(init) {
    return new Select(init)
}
