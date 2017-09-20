import { HTMLElementAssembler } from './html'

export class H1 extends HTMLElementAssembler {}

export function h1(init) {
    return new H1(init)
}

