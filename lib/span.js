import { HTMLElementAssembler } from './html'

export class Span extends HTMLElementAssembler {}

export function span(init) {
    return new Span(init)
}
