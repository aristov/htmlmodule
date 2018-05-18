import { HTMLElementAssembler } from './element'

export class Strong extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Strong}
 */
export function strong(init) {
    return new Strong(init)
}

Strong.register()
