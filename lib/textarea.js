import { HTMLElementAssembler } from './element'

export class TextArea extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {TextArea}
 */
export function textarea(...init) {
    return new TextArea(...init)
}
