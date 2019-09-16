import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLDivElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-div-element
 */
export class HTMLDiv extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLDivElement
     * @override
     */
    static get interface() {
        return HTMLDivElement || super.interface
    }
}

/**
 * @alias HTMLDiv
 */
export { HTMLDiv as Div }

/**
 * @param {*} [init]
 * @returns {HTMLDiv}
 */
export function div(init) {
    return new HTMLDiv(init)
}

HTMLDiv.register()
