import { HTMLElementAssembler } from './element'

const { HTMLHtmlElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-html-element
 */
export class Html extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHtmlElement
     * @override
     */
    static get interface() {
        return HTMLHtmlElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Html}
 */
export function html(init) {
    return new Html(init)
}

Html.register()
