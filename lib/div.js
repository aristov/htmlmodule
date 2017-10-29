import { HTMLElementAssembler } from './element'

export class Div extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Div}
 */
export function div(init) {
    return new Div(init)
}
