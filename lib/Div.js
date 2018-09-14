import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLDivElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-div-element
 */
export class Div extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLDivElement
     * @override
     */
    static get interface() {
        return HTMLDivElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Div}
 */
export function div(init) {
    return new Div(init)
}

Div.register()
