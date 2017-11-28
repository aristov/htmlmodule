import { DocumentAssembler } from 'dommodule'
import { Html } from './html'

const { HTMLDocument, document : { implementation } } = window

const DEFAULT_TITLE = 'HTML document'

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
     * @param {String} title
     */
    set title(title) {
        this.node.title = title
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.node.title
    }

    /**
     * @param {*} init
     * @returns {HTMLDocument}
     */
    static create(init) {
        const { title = this.title } = init || this
        return implementation.createHTMLDocument(title)
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

    /**
     * @returns {String}
     */
    static get title() {
        return DEFAULT_TITLE
    }
}
