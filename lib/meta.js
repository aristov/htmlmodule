import { HTMLElementAssembler } from './element'

const { HTMLMetaElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-meta-element
 */
export class Meta extends HTMLElementAssembler {
    /**
     * @param {string} httpEquiv
     */
    set httpEquiv(httpEquiv) {
        this.node.httpEquiv = httpEquiv
    }

    /**
     * @returns {string}
     */
    get httpEquiv() {
        return this.node.httpEquiv
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {string} content
     */
    set content(content) {
        this.node.content = content
    }

    /**
     * @returns {string}
     */
    get content() {
        return this.node.content
    }

    /**
     * @returns {interface} HTMLMetaElement
     * @override
     */
    static get interface() {
        return HTMLMetaElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Meta}
 */
export function meta(init) {
    return new Meta(init)
}

Meta.register()
