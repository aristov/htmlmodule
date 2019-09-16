import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sub-element
 */
export class HTMLSub extends HTMLElementAssembler {}

/**
 * @alias HTMLSub
 */
export { HTMLSub as Sub }

/**
 * @param {*} [init]
 * @returns {HTMLSub}
 */
export function sub(init) {
    return new HTMLSub(init)
}

HTMLSub.register()
