import { ElementAssembler } from 'dommodule'

const { assign, getPrototypeOf } = Object
const { HTMLDocument, HTMLElement, document } = window

const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'
const HTML_PREFIX = 'html'
const EMPTY_PREFIX = ''
const LOCAL_NAME = 'html'
const NAME_PROPERTY_NAME = 'name'
const TABINDEX_ATTRIBUTE_NAME = 'tabindex'

export class HTMLElementAssembler extends ElementAssembler {
    /**
     * @param {*} init
     */
    assign(init) {
        super.assign(init)
        if(NAME_PROPERTY_NAME in init) this.name = init.name
    }

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
     * @param {String} name
     */
    set name(name) {
        if(NAME_PROPERTY_NAME in this.node) this.node.name = name
        else this._onMismatch(NAME_PROPERTY_NAME, name)
    }

    /**
     * @returns {String} 
     */
    get name() {
        return this.node.name
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
        assign(this.node.dataset, dataset)
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
     * Create the specified Element node
     * @param {*} [init]
     * @returns {Element|*} created element
     */
    static create(init) {
        if(document instanceof HTMLDocument) {
            const { localName = this.localName } = init || this
            return document.createElement(localName)
        }
        else return super.create(init)
    }

    /**
     * @returns {Function} HTMLElementAssembler
     */
    static get baseAssembler() {
        return HTMLElementAssembler
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
        return document instanceof HTMLDocument?
            EMPTY_PREFIX :
            HTML_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        const assembler = this.baseAssembler
        if(this === assembler) return LOCAL_NAME
        else {
            let object = this
            let proto
            while(proto = getPrototypeOf(object)) {
                if(proto === assembler) break
                else object = proto
            }
            return object.name.toLowerCase()
        }
    }

    /**
     * @returns {Window.HTMLElement}
     */
    static get intraface() {
        return HTMLElement
    }
}
