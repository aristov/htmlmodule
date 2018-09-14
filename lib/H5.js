import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h5-element
 */
export class H5 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H5}
 */
export function h5(init) {
    return new H5(init)
}

H5.register()
