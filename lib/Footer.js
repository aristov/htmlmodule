import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-footer-element
 */
export class Footer extends HTMLElementAssembler {}

export const HTMLFooter = Footer

/**
 * @param {*} [init]
 * @returns {Footer}
 */
export function footer(init) {
    return new Footer(init)
}

Footer.register()
