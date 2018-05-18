import { HTMLElementAssembler } from './element'

const { HTMLTitleElement } = window

export class Title extends HTMLElementAssembler {
    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {window.HTMLTitleElement}
     */
    static get interface() {
        return HTMLTitleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Title}
 */
export function title(init) {
    return new Title(init)
}

Title.register()
