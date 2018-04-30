import { HTMLModAssembler } from './mod'

export class Del extends HTMLModAssembler {}

/**
 * @param {*} [init]
 * @returns {Del}
 */
export function del(init) {
    return new Del(init)
}
