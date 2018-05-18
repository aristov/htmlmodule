import { HTMLElementAssembler } from './element'

export class H2 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H2}
 */
export function h2(init) {
    return new H2(init)
}

H2.register()
