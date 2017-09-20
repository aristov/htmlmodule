import { HTMLElementAssembler } from './html'

export class Div extends HTMLElementAssembler {}

export function div(init) {
    return new Div(init)
}
