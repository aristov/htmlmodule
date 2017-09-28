import { HTMLElementAssembler } from './html'

export class Table extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Table}
 */
export function table(init) {
    return new Table(init)
}

export class THead extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {THead}
 */
export function tHead(init) {
    return new THead(init)
}

export class TBody extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {TBody}
 */
export function tBody(init) {
    return new TBody(init)
}

export class Tr extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Tr}
 */
export function tr(init) {
    return new Tr(init)
}

export class Th extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Th}
 */
export function th(init) {
    return new Th(init)
}

export class Td extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Td}
 */
export function td(init) {
    return new Td(init)
}
