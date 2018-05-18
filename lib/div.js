import { HTMLElementAssembler } from './element'

const { HTMLDivElement } = window

export class Div extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLDivElement}
     */
    static get interface() {
        return HTMLDivElement
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
