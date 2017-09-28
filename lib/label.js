import { HTMLElementAssembler } from './html'

export class Label extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Label}
 */
export function label(init) {
    return new Label(init)
}
