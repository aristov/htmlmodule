import { HTMLElementAssembler } from './html'

export class Strong extends HTMLElementAssembler {}

/**
 * @param {*} init
 * @returns {Strong}
 */
export function strong(init) {
    return new Strong(init)
}
