import { HTMLElementAssembler } from './element'

export class Header extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Header}
 */
export function header(init) {
    return new Header(init)
}

Header.register()
