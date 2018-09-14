import { HTMLModAssembler } from './HTMLModAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ins-element
 */
export class Ins extends HTMLModAssembler {}

/**
 * @param {*} [init]
 * @returns {Ins}
 */
export function ins(init) {
    return new Ins(init)
}

Ins.register()
