import { HTMLElementAssembler } from './html'

export class Button extends HTMLElementAssembler {}

export function button(init) {
    return new Button(init)
}
