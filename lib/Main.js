import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-main-element
 */
export class Main extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Main}
 */
export function main(init) {
    return new Main(init)
}

Main.register()
