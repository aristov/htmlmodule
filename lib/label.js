import { HTMLElementAssembler } from './html'

export class Label extends HTMLElementAssembler {}

export function label(init) {
    return new Label(init)
}
