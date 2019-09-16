import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-u-element
 */
export class HTMLU extends HTMLElementAssembler {}

/**
 * @alias HTMLU
 */
export { HTMLU as U }

/**
 * @param {*} [init]
 * @returns {HTMLU}
 */
export function u(init) {
    return new HTMLU(init)
}

HTMLU.register()
