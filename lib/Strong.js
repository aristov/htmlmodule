import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-strong-element
 */
export class Strong extends HTMLElementAssembler {}

export const HTMLStrong = Strong

/**
 * @param {*} [init]
 * @returns {Strong}
 */
export function strong(init) {
    return new Strong(init)
}

Strong.register()
