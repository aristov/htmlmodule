import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sub-element
 */
export class Sub extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Sub}
 */
export function sub(init) {
    return new Sub(init)
}

Sub.register()
