import { ElementAssembler } from 'dommodule'

const { assign, getPrototypeOf } = Object
const { HTMLDocument, HTMLElement, document } = window

const CLASS_PREFIX_RE = /^HTML/
const EMPTY_STRING = ''
const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'
const HTML_PREFIX = 'html'
const TABINDEX_ATTRIBUTE_NAME = 'tabindex'

/**
 * @see https://www.w3.org/TR/html/dom.html#htmlelement
 * @abstract
 */
export class HTMLElementAssembler extends ElementAssembler {
    /**
     * Click the element
     */
    click() {
        this.node.click()
    }

    /**
     * Focus the element
     */
    focus() {
        this.node.focus()
    }

    /**
     * Blur the element
     */
    blur() {
        this.node.blur()
    }

    /**
     * @param {String} accessKey
     */
    set accessKey(accessKey) {
        this.node.accessKey = accessKey
    }

    /**
     * @returns {String}
     */
    get accessKey() {
        return this.node.accessKey
    }

    /**
     * @param {{}} dataset
     */
    set dataset(dataset) {
        const _dataset = this.dataset
        for(let name in dataset) {
            if(dataset.hasOwnProperty(name)) {
                if(name === null) {
                    delete _dataset[name]
                }
                else _dataset[name] = dataset[name]
            }
        }
    }

    /**
     * @returns {{}} DOMStringMap
     */
    get dataset() {
        return this.node.dataset
    }

    /**
     * @param {String} dir
     */
    set dir(dir) {
        this.node.dir = dir
    }

    /**
     * @returns {String}
     */
    get dir() {
        return this.node.dir
    }

    /**
     * @param {String} innerHTML
     */
    set innerHTML(innerHTML) {
        this.node.innerHTML = innerHTML
    }

    /**
     * @returns {String} 
     */
    get innerHTML() {
        return this.node.innerHTML
    }

    /**
     * @param {String} innerText
     */
    set innerText(innerText) {
        this.node.innerText = innerText
    }

    /**
     * @returns {String}
     */
    get innerText() {
        return this.node.innerText
    }

    /**
     * @param {String} lang
     */
    set lang(lang) {
        this.node.lang = lang
    }

    /**
     * @returns {String}
     */
    get lang() {
        return this.node.lang
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
        if(isNaN(tabIndex)) {
            this.node.removeAttribute(TABINDEX_ATTRIBUTE_NAME)
        }
        else this.node.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        return this.node.hasAttribute(TABINDEX_ATTRIBUTE_NAME)?
            this.node.tabIndex :
            NaN
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
     * @param {Boolean} translate
     */
    set translate(translate) {
        this.node.translate = translate
    }

    /**
     * @returns {Boolean}
     */
    get translate() {
        return this.node.translate
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
     * @param {*} [init]
     * @returns {Element|*} created element
     */
    static create(init) {
        if(this === this.superAssembler) {
            throw TypeError(`Could not create an abstract ${ this.interface.name } instance`)
        }
        else if(document instanceof HTMLDocument) {
            const { localName = this.localName } = init || this
            return document.createElement(localName)
        }
        else return super.create(init)
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return document instanceof HTMLDocument? EMPTY_STRING : HTML_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        const { superAssembler } = this
        let object = this
        let proto
        while(proto = getPrototypeOf(object)) {
            if(proto === superAssembler) break
            else object = proto
        }
        return object.name.replace(CLASS_PREFIX_RE, EMPTY_STRING).toLowerCase()
    }

    /**
     * @returns {Function} HTMLElementAssembler
     */
    static get superAssembler() {
        return HTMLElementAssembler
    }

    /**
     * @returns {window.HTMLElement}
     */
    static get interface() {
        return HTMLElement
    }
}
