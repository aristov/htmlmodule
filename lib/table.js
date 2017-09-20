import { HTMLElementAssembler } from './html'

export class Table extends HTMLElementAssembler {}

export function table(init) {
    return new Table(init)
}

export class THead extends HTMLElementAssembler {}

export function tHead(init) {
    return new THead(init)
}

export class TBody extends HTMLElementAssembler {}

export function tBody(init) {
    return new TBody(init)
}

export class Tr extends HTMLElementAssembler {}

export function tr(init) {
    return new Tr(init)
}

export class Th extends HTMLElementAssembler {}

export function th(init) {
    return new Th(init)
}

export class Td extends HTMLElementAssembler {}

export function td(init) {
    return new Td(init)
}
