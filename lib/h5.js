import { HTMLElementAssembler } from './element'

export class H5 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H5}
 */
export function h5(...init) {
    return new H5(...init)
}
