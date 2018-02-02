import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLFormElement } = window

export class Form extends HTMLElementAssembler {
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
     * Reset the form
     */
    reset() {
        this.node.reset()
    }

    /**
     * Submit the form
     */
    submit() {
        this.node.submit()
    }

    /**
     * @param {String} acceptCharset
     */
    set acceptCharset(acceptCharset) {
        this.node.acceptCharset = acceptCharset
    }

    /**
     * @returns {String}
     */
    get acceptCharset() {
        return this.node.acceptCharset
    }

    /**
     * @param {String} action
     */
    set action(action) {
        this.node.action = action
    }

    /**
     * @return {String}
     */
    get action() {
        return this.node.action
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @returns {(HTMLElementAssembler|*)[]}
     */
    get elements() {
        return map.call(this.node.elements, node => {
            return this.getInstance(node)
        })
    }

    /**
     * @param {String} enctype
     */
    set enctype(enctype) {
        this.node.enctype = enctype
    }

    /**
     * @returns {String}
     */
    get enctype() {
        return this.node.enctype
    }

    /**
     * @param {String} method
     */
    set method(method) {
        this.node.method = method
    }

    /**
     * @returns {String}
     */
    get method() {
        return this.node.method
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
     * @param {Boolean} noValidate
     */
    set noValidate(noValidate) {
        this.node.noValidate = noValidate
    }

    /**
     * @returns {Boolean}
     */
    get noValidate() {
        return this.node.noValidate
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {window.HTMLFormElement}
     */
    static get interface() {
        return HTMLFormElement
    }
}

/**
 * @param {*} [init]
 * @returns {Form}
 */
export function form(init) {
    return new Form(init)
}
