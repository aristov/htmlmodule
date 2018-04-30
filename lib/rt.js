import { HTMLElementAssembler } from './element'

export class Rt extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Rt}
 */
export function rt(init) {
    return new Rt(init)
}
