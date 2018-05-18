import { HTMLElementAssembler } from './element'

export class Ruby extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Ruby}
 */
export function ruby(init) {
    return new Ruby(init)
}

Ruby.register()
