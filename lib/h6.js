import { HTMLElementAssembler } from './element'

export class H6 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H6}
 */
export function h6(init) {
    return new H6(init)
}

H6.register()
