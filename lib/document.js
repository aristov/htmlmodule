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
     * @param {*} body {Body|HTMLBodyElement}
     */
    set body(body) {
        this.node.body = this.constructor.getNodeOf(body)
    }

    /**
     * @returns {Body}
     */
    get body() {
        return this.getInstanceOf(this.node.body)
    }

    /**
     * @param {Head} head {HTMLHeadElement|Head}
     */
    set head(head) {
        const _head = this.head
        if(_head) {
            _head.replaceWith(head)
        }
        else this.documentElement.prepend(head)
    }

    /**
     * @returns {Head}
     */
    get head() {
        return this.getInstanceOf(this.node.head)
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
        return HTMLDocument || super.interface
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
