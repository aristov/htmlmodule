import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLHRElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-hr-element
 */
export class HTMLHr extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHRElement
     * @override
     */
    static get interface() {
        return HTMLHRElement || super.interface
    }
}

/**
 * @alias HTMLHr
 */
export { HTMLHr as Hr }

/**
 * @param {*} [init]
 * @returns {HTMLHr}
 */
export function hr(init) {
    return new HTMLHr(init)
}

HTMLHr.register()
