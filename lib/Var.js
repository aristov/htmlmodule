import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-var-element
 */
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

Var.register()
