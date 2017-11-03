import { HTMLElementAssembler } from './element'

const { HTMLOptionElement } = window
const LOCAL_NAME = 'option'

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the Option class from the HTML standard
 * https://www.w3.org/TR/html/sec-forms.html#dom-htmloptionelement-option
 */
export class HTMLOption extends HTMLElementAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {window.HTMLOptionElement}
     */
    static get interface() {
        return HTMLOptionElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLOption}
 */
export function option(init) {
    return new HTMLOption(init)
}
