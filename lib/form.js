import { HTMLElementAssembler } from './html'

export class Form extends HTMLElementAssembler {
    set acceptCharset(acceptCharset) {
        this.node.acceptCharset = acceptCharset
    }

    get acceptCharset() {
        return this.node.acceptCharset
    }

    set action(action) {
        this.node.action = action
    }

    get action() {
        return this.node.action
    }

    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    get autocomplete() {
        return this.node.autocomplete
    }

    set enctype(enctype) {
        this.node.enctype = enctype
    }

    get enctype() {
        return this.node.enctype
    }

    set method(method) {
        this.node.method = method
    }

    get method() {
        return this.node.method
    }

    set name(name) {
        this.node.name = name
    }

    get name() {
        return this.node.name
    }

    set noValidate(noValidate) {
        this.node.noValidate = noValidate
    }

    get noValidate() {
        return this.node.noValidate
    }

    set target(target) {
        this.node.target = target
    }

    get target() {
        return this.node.target
    }
}

/**
 * @param {*} [init]
 * @returns {Form}
 */
export function form(init) {
    return new Form(init)
}
