import { HTMLElementAssembler } from './html'

export class Option extends HTMLElementAssembler {}

export function option(init) {
    return new Option(init)
}
