import { HTMLElementAssembler } from './html'

export class Select extends HTMLElementAssembler {}

export function select(init) {
    return new Select(init)
}
