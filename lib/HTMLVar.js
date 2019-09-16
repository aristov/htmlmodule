import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-var-element
 */
export class HTMLVar extends HTMLElementAssembler {}

/**
 * @alias HTMLVar
 */
export { HTMLVar as Var }

/**
 * The different naming is used to avoid a confilct
 * with the legacy `var` JavaScript keyword
 *
 * @param {*} [init]
 * @returns {HTMLVar}
 */
export function variable(init) {
    return new HTMLVar(init)
}

HTMLVar.register()
