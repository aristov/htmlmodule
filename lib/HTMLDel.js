import { HTMLModAssembler } from './HTMLModAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-del-element
 */
export class HTMLDel extends HTMLModAssembler {}

/**
 * @alias HTMLDel
 */
export { HTMLDel as Del }

/**
 * @param {*} [init]
 * @returns {HTMLDel}
 */
export function del(init) {
    return new HTMLDel(init)
}

HTMLDel.register()
