import { DocumentAssembler } from 'dommodule'
import { HTMLElementAssembler } from './element'
import { Form } from './form'

const { HTMLObjectElement } = window

/**
 * The `HTML` prefix is used to avoid a conflict with
 * the native `Object` class from the ECMAScript standard
 * 
 * https://tc39.github.io/ecma262/#sec-object-objects
 */
export class HTMLObject extends HTMLElementAssembler {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} data
     */
    set data(data) {
        this.node.data = data
    }

    /**
     * @returns {String}
     */
    get data() {
        return this.node.data
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {Boolean} typeMustMatch
     */
    set typeMustMatch(typeMustMatch) {
        this.node.typeMustMatch = typeMustMatch
    }

    /**
     * @returns {Boolean}
     */
    get typeMustMatch() {
        return this.node.typeMustMatch
    }

    /**
     * @param {String} useMap
     */
    set useMap(useMap) {
        this.node.useMap = useMap
    }

    /**
     * @returns {String}
     */
    get useMap() {
        return this.node.useMap
    }

    /**
     * @param {String} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {String}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {String} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {String} 
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, Form)
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {DocumentAssembler}
     */
    get contentDocument() {
        return this.getInstanceOf(this.node.contentDocument, DocumentAssembler)
    }

    /**
     * @returns {window.HTMLObjectElement}
     */
    static get interface() {
        return HTMLObjectElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLObject}
 */
export function object(init) {
    return new HTMLObject(init)
}
