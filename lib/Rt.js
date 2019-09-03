import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-rt-element
 */
export class Rt extends HTMLElementAssembler {}

export const HTMLRt = Rt

/**
 * @param {*} [init]
 * @returns {Rt}
 */
export function rt(init) {
    return new Rt(init)
}

Rt.register()
