import { DocumentAssembler } from 'dommodule'
import { HTMLElementAssembler } from './element'
import { Html } from './html'

const { HTMLDocument, document : { implementation } } = window
const { namespaceURI, qualifiedName } = HTMLElementAssembler

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
     * @returns {HTMLElementAssembler.namespaceURI}
     */
    static get namespaceURI() {
        return namespaceURI
    }

    /**
     * @returns {Html.qualifiedName}
     */
    static get qualifiedName() {
        return qualifiedName
    }

    /**
     * @returns {String}
     */
    static get title() {
        return DEFAULT_TITLE
    }

    /**
     * @returns {Window.HTMLDocument}
     */
    static get interface() {
        return HTMLDocument
    }
}
