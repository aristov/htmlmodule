import { DocumentAssembler } from 'dommodule/lib/document'
import { HTMLDocumentTypeAssembler } from './doctype'
import { HTMLElementAssembler } from './element'
import { Html } from './html'

const { HTMLDocument, document : { implementation } } = window

const EMPTY_STRING = ''

/**
 * @see https://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html#ID-26809268
 */
export class HTMLDocumentAssembler extends DocumentAssembler {
    /**
     * @param {HTMLElement} activeElement
     */
    set activeElement(activeElement) {
        if(this.node.contains(activeElement)) {
            activeElement.focus()
        }
    }

    /**
     * @returns {HTMLElement}
     */
    get activeElement() {
        return this.node.activeElement
    }

    /**
     * @param {HTMLBodyElement} body
     */
    set body(body) {
        this.node.body = body
    }

    /**
     * @returns {HTMLBodyElement}
     */
    get body() {
        return this.node.body
    }

    /**
     * @param {HTMLHeadElement} head
     */
    set head(head) {
        const element = this.head
        if(element) element.replaceWith(head)
        else this.documentElement.prepend(head)
    }

    /**
     * @returns {HTMLHeadElement}
     */
    get head() {
        return this.node.head
    }

    /**
     * @param {string} title
     */
    set title(title) {
        this.node.title = title
    }

    /**
     * @returns {string}
     */
    get title() {
        return this.node.title
    }

    /**
     * @param {*} [init]
     * @returns {HTMLDocument}
     * @override
     */
    static create(init) {
        const { title = this.title } = init || this
        return implementation.createHTMLDocument(title)
    }

    /**
     * @returns {class} HTMLDocumentTypeAssembler
     * @override
     */
    static get doctypeAssembler() {
        return HTMLDocumentTypeAssembler
    }

    /**
     * @returns {class} Html
     * @override
     */
    static get elementAssembler() {
        return Html
    }

    /**
     * @returns {interface} HTMLDocument
     * @override
     */
    static get interface() {
        return HTMLDocument
    }

    /**
     * @returns {string}
     * @abstract
     */
    static get title() {
        return EMPTY_STRING
    }
}

HTMLElementAssembler.HTMLDocumentAssembler = HTMLDocumentAssembler
