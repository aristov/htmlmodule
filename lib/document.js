import { DocumentAssembler } from 'dommodule'
import { Html } from './html'

const { HTMLDocument, document : { implementation } } = window

const DEFAULT_TITLE = 'HTML document'

export class HTMLDocumentAssembler extends DocumentAssembler {
    /**
     * @param {*} init
     * @returns {HTMLDocument}
     */
    static create(init) {
        const { title = this.title } = init || this
        return implementation.createHTMLDocument(title)
    }

    /**
     * @returns {String}
     */
    static get title() {
        return DEFAULT_TITLE
    }

    /**
     * @returns {Html}
     */
    static get elementAssembler() {
        return Html
    }

    /**
     * @returns {Window.HTMLDocument}
     */
    static get interface() {
        return HTMLDocument
    }
}
