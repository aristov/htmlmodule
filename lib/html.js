import { ElementAssembler, AttrAssembler, DocumentAssembler } from 'dommodule'

const { assign, getPrototypeOf } = Object

const { HTMLDocument } = window

const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'
const HTML_PREFIX = 'xhtml'
const EMPTY_PREFIX = ''
const DEFAULT_HTML_DOCUMENT_TITLE = 'HTML document'
const DEFAULT_LOCAL_NAME = 'html'

export class HTMLElementAssembler extends ElementAssembler {
    /**
     * @param {{}} dataset
     */
    set dataset(dataset) {
        assign(this.node.dataset, dataset)
    }

    /**
     * @returns {{}} DOMStringMap
     */
    get dataset() {
        return this.node.dataset
    }

    /**
     * @param {{}} style
     */
    set style(style) {
        assign(this.node.style, style)
    }

    /**
     * @returns {{}} CSSStyleDeclaration
     */
    get style() {
        return this.node.style
    }

    /**
     * @param {Number} tabIndex
     */
    set tabIndex(tabIndex) {
        if(isNaN(tabIndex)) this.node.removeAttribute('tabindex')
        else this.node.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        const node = this.node
        return node.hasAttribute('tabindex')? node.tabIndex : NaN
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.node.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.node.hidden
    }

    /**
     * Create the specified Element node
     * @param {Document|HTMLDocument} [document]
     * @param {String} [namespaceURI]
     * @param {String} [qualifiedName]
     * @returns {Element|*} created element
     */
    static create({
        document = this.document,
        namespaceURI = this.namespaceURI,
        qualifiedName = this.qualifiedName,
    } = this) {
        return document instanceof HTMLDocument?
            document.createElement(qualifiedName) :
            document.createElementNS(namespaceURI, qualifiedName)
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return this.document instanceof HTMLDocument?
            EMPTY_PREFIX :
            HTML_PREFIX
    }

    /**
     * The local name of the element node
     * @returns {String}
     */
    static get localName() {
        if(this === HTMLElementAssembler) return DEFAULT_LOCAL_NAME
        else {
            let _this = this
            let proto
            while(proto = getPrototypeOf(_this)) {
                if(proto === HTMLElementAssembler) break
                else _this = proto
            }
            return _this.name.toLowerCase()
        }
    }
}

export class Html extends HTMLElementAssembler {}

/**
 * @param {*} init
 * @returns {HTMLElementAssembler}
 */
export function html(init) {
    return new Html(init)
}

export class HTMLDocumentAssembler extends DocumentAssembler {
    /**
     * @param {String} title
     * @returns {HTMLDocument}
     */
    static create({ title = this.title } = this) {
        return this.implementation.createHTMLDocument(title)
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return HTML_PREFIX
    }

    /**
     * @returns {String}
     */
    static get title() {
        return DEFAULT_HTML_DOCUMENT_TITLE
    }
}

export class HTMLAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return HTML_PREFIX
    }
}
