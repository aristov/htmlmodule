import { ElementAssembler } from 'dommodule/lib/ElementAssembler'

let undefined
const { assign, getPrototypeOf } = Object
const { HTMLElement } = window
const CLASS_PREFIX_RE = /^HTML/
const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlelement
 * @abstract
 */
export class HTMLElementAssembler extends ElementAssembler {
    /**
     * @param {{}} init
     */
    init(init) {
        super.init(init)
        this.classList = this.constructor.classList
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
     * @param {string} accessKey
     */
    set accessKey(accessKey) {
        this.node.accessKey = accessKey
    }

    /**
     * @returns {string}
     */
    get accessKey() {
        return this.node.accessKey
    }

    /**
     * @param {string} contentEditable
     */
    set contentEditable(contentEditable) {
        this.node.contentEditable = contentEditable
    }

    /**
     * @returns {string}
     */
    get contentEditable() {
        return this.node.contentEditable
    }

    /**
     * @param {{}} dataset
     */
    set dataset(dataset) {
        const _dataset = this.dataset
        for(let name in dataset) {
            if(dataset.hasOwnProperty(name)) {
                const value = dataset[name]
                if(value === null) {
                    delete _dataset[name]
                }
                else if(value !== undefined) {
                    _dataset[name] = dataset[name]
                }
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
     * @param {string} dir
     */
    set dir(dir) {
        this.node.dir = dir
    }

    /**
     * @returns {string}
     */
    get dir() {
        return this.node.dir
    }

    /**
     * @param {string} innerHTML
     */
    set innerHTML(innerHTML) {
        this.node.innerHTML = innerHTML
    }

    /**
     * @returns {string} 
     */
    get innerHTML() {
        return this.node.innerHTML
    }

    /**
     * @param {string} innerText
     */
    set innerText(innerText) {
        this.node.innerText = innerText
    }

    /**
     * @returns {string}
     */
    get innerText() {
        return this.node.innerText
    }

    /**
     * @returns {boolean}
     */
    get isContentEditable() {
        return this.node.isContentEditable
    }

    /**
     * @param {string} lang
     */
    set lang(lang) {
        this.node.lang = lang
    }

    /**
     * @returns {string}
     */
    get lang() {
        return this.node.lang
    }

    /**
     * @param {string} outerHTML
     */
    set outerHTML(outerHTML) {
        this.node.outerHTML = outerHTML
    }

    /**
     * @returns {string}
     */
    get outerHTML() {
        return this.node.outerHTML
    }

    /**
     * @param {*} style {{}|string}
     */
    set style(style) {
        if(typeof style === 'string') {
            this.node.style = style
        }
        else assign(this.node.style, style)
    }

    /**
     * @returns {CSSStyleDeclaration}
     */
    get style() {
        return this.node.style
    }

    /**
     * @param {number|null} tabIndex
     */
    set tabIndex(tabIndex) {
        if(tabIndex === null) {
            this.removeAttr('tabindex')
        }
        else this.node.tabIndex = tabIndex
    }

    /**
     * @returns {number|null}
     */
    get tabIndex() {
        const tabIndex = this.node.tabIndex
        return this.hasAttr('tabindex') || tabIndex > -1?
            tabIndex :
            null
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
     * @param {boolean} translate
     */
    set translate(translate) {
        this.node.translate = translate
    }

    /**
     * @returns {boolean}
     */
    get translate() {
        return this.node.translate
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        this.node.hidden = hidden
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return this.node.hidden
    }

    /**
     * @returns {string[]}
     */
    static get classList() {
        const { superAssembler } = this
        const classList = []
        let object = this
        let proto
        if(this !== superAssembler) {
            while(proto = getPrototypeOf(object)) {
                if(proto !== superAssembler) {
                    const classToken = object.classToken
                    classToken && classList.push(classToken)
                    object = proto
                }
                else break
            }
        }
        return classList
    }

    /**
     * @returns {string}
     */
    static get classToken() {
        return Object.getPrototypeOf(this) === this.superAssembler? '' : this.name
    }

    /**
     * @returns {class} HTMLDocumentAssembler|DocumentAssembler
     * @override
     */
    static get documentAssembler() {
        return HTMLElementAssembler.HTMLDocumentAssembler || super.documentAssembler
    }

    /**
     * @returns {interface} HTMLElement
     * @override
     */
    static get interface() {
        return HTMLElement || super.interface
    }

    /**
     * @returns {string}
     * @override
     */
    static get localName() {
        const { superAssembler } = this
        let object = this
        let proto
        if(this === superAssembler) {
            return ''
        }
        while(proto = getPrototypeOf(object)) {
            if(proto === superAssembler) {
                break
            }
            else object = proto
        }
        return object.name.replace(CLASS_PREFIX_RE, '').toLowerCase()
    }

    /**
     * @returns {string}
     * @override
     */
    static get namespace() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {string}
     */
    static get selector() {
        const classToken = this.classToken
        return classToken?
            super.selector + '.' + classToken :
            super.selector
    }

    /**
     * @returns {class} HTMLElementAssembler
     * @override
     */
    static get superAssembler() {
        return HTMLElementAssembler
    }
}

HTMLElementAssembler.register()
