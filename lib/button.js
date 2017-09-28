import { HTMLElementAssembler } from './html'

export class Button extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Button}
 */
export function button(init) {
    return new Button(init)
}
