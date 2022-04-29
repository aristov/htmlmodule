import { DocumentAssembler } from 'dommodule/lib/DocumentAssembler'
import { HTMLDocumentTypeAssembler } from './HTMLDocumentTypeAssembler'
import { HtmlElem } from './HTMLElementAssembler'
import { HTMLHtml } from './HTMLHtml'
import { Win } from './WindowAssembler'

const { HTMLDocument, document : { implementation } } = window

const EMPTY_STRING = ''

/**
 * @see https://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html#ID-26809268
 */
export class DomDoc extends DocumentAssembler {
    /**
     * @param {*} activeElement {HTMLElementAssembler|HTMLElement}
     */
    set activeElement(activeElement) {
        if(this.node.contains(activeElement)) {
            activeElement.focus()
        }
    }

    /**
     * @returns {HtmlElem}
     */
    get activeElement() {
        return this.getInstanceOf(this.node.activeElement)
    }

    /**
     * @param {*} body {Body|HTMLBodyElement}
     */
    set body(body) {
        this.node.body = DocumentAssembler.getNodeOf(body)
    }

    /**
     * @returns {Body}
     */
    get body() {
        return this.getInstanceOf(this.node.body)
    }

    /**
     * @returns {Win|null}
     */
    get defaultView() {
        return Win.getInstanceOf(this.node.defaultView)
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
     * @param {{}} init
     * @param {string} init.title
     * @returns {HTMLDocument}
     * @override
     */
    static create({ title = this.title }) {
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
     * @returns {class} HTMLHtml
     * @override
     */
    static get elementAssembler() {
        return HTMLHtml
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

HtmlElem.DomDoc = DomDoc

const resolve = DocumentAssembler.resolve

Object.defineProperty(DocumentAssembler, 'resolve', {
    configurable : true,
    writable : true,
    /**
     * @param {HTMLDocument|Document|*} node
     * @returns {DomDoc|DocumentAssembler|*}
     */
    value : function(node) {
        return node.constructor.name === 'HTMLDocument'?
            DomDoc :
            resolve.call(this, node)
    }
})
