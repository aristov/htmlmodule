import { HTMLElementAssembler } from './element'
import { Form } from './form'

const { HTMLOptionElement } = window
const LOCAL_NAME = 'option'

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the Option class from the HTML standard
 * https://www.w3.org/TR/html/sec-forms.html#dom-htmloptionelement-option
 */
export class HTMLOption extends HTMLElementAssembler {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstance(this.node.form, Form)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.node.label
    }

    /**
     * @param {Boolean} defaultSelected
     */
    set defaultSelected(defaultSelected) {
        this.node.defaultSelected = defaultSelected
    }

    /**
     * @returns {Boolean}
     */
    get defaultSelected() {
        return this.node.defaultSelected
    }

    /**
     * @param {Boolean} selected
     */
    set selected(selected) {
        this.node.selected = selected
    }

    /**
     * @returns {Boolean}
     */
    get selected() {
        return this.node.selected
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {Number}
     */
    get index() {
        return this.node.index
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {window.HTMLOptionElement}
     */
    static get interface() {
        return HTMLOptionElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLOption}
 */
export function option(init) {
    return new HTMLOption(init)
}
