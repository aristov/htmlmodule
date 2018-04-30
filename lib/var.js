import { HTMLElementAssembler } from './element'

export class Var extends HTMLElementAssembler {}

/**
 * The different naming is used to avoid a confilct
 * with the legacy `var` JavaScript keyword
 *
 * @param {*} [init]
 * @returns {Var}
 */
export function variable(init) {
    return new Var(init)
}
