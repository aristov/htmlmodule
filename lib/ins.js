import { HTMLModAssembler } from './mod'

export class Ins extends HTMLModAssembler {}

/**
 * @param {*} [init]
 * @returns {Ins}
 */
export function ins(init) {
    return new Ins(init)
}
