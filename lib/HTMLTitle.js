import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTitleElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-title-element
 */
export class HTMLTitle extends HTMLElementAssembler {
    /**
     * @param {string} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {string}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {interface} HTMLTitleElement
     * @override
     */
    static get interface() {
        return HTMLTitleElement || super.interface
    }
}

/**
 * @alias HTMLTitle
 */
export { HTMLTitle as Title }

/**
 * @param {*} [init]
 * @returns {HTMLTitle}
 */
export function title(init) {
    return new HTMLTitle(init)
}

HTMLTitle.register()
