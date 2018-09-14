import { HTMLModAssembler } from './HTMLModAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-del-element
 */
export class Del extends HTMLModAssembler {}

/**
 * @param {*} [init]
 * @returns {Del}
 */
export function del(init) {
    return new Del(init)
}

Del.register()
