import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLOptionElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-option-element
 */
export class HTMLOption extends HTMLElementAssembler {
    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|HTMLElementAssembler|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form)
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return this.node.label
    }

    /**
     * @param {boolean} defaultSelected
     */
    set defaultSelected(defaultSelected) {
        this.node.defaultSelected = defaultSelected
    }

    /**
     * @returns {boolean}
     */
    get defaultSelected() {
        return this.node.defaultSelected
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        this.node.selected = selected
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.node.selected
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {string} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {string}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {number}
     */
    get index() {
        return this.node.index
    }

    /**
     * @returns {interface} HTMLOptionElement
     * @override
     */
    static get interface() {
        return HTMLOptionElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLOption}
 */
export function option(init) {
    return new HTMLOption(init)
}

HTMLOption.register()
