import { ElementAssembler } from 'dommodule'

const { assign, getPrototypeOf } = Object
const { HTMLDocument, HTMLElement, document } = window

const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'
const HTML_PREFIX = 'html'
const EMPTY_PREFIX = ''
const LOCAL_NAME = 'html'

export class HTMLElementAssembler extends ElementAssembler {
    init(init) {
        super.init(init)
        if(init && init.constructor === Object && init.hasOwnProperty('name')) {
            this.name = init.name
        }
    }

    click() {
        this.node.click()
    }

    focus() {
        this.node.focus()
    }

    blur() {
        this.node.blur()
    }

    set name(name) {
        if('name' in this.node) this.node.name = name
    }

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
            this.node.removeAttribute('tabindex')
        }
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
     * @param {String} [init]
     * @param {String} [init.localName]
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
        if(this === HTMLElementAssembler) return LOCAL_NAME
        else {
            let object = this
            let proto
            while(proto = getPrototypeOf(object)) {
                if(proto === HTMLElementAssembler) break
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
