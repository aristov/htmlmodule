import { HTMLElementAssembler } from './html'

export class Main extends HTMLElementAssembler {}

/**
 * @param {*} init
 * @returns {Main}
 */
export function main(init) {
    return new Main(init)
}
