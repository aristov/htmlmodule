import { HTMLElementAssembler } from './element'

export class S extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {S}
 */
export function s(init) {
    return new S(init)
}

S.register()
