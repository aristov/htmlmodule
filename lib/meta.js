import { HTMLElementAssembler } from './element'

const { HTMLMetaElement } = window

export class Meta extends HTMLElementAssembler {
    /**
     * @param {String} httpEquiv
     */
    set httpEquiv(httpEquiv) {
        this.node.httpEquiv = httpEquiv
    }

    /**
     * @returns {String}
     */
    get httpEquiv() {
        return this.node.httpEquiv
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
     * @param {String} content
     */
    set content(content) {
        this.node.content = content
    }

    /**
     * @returns {String}
     */
    get content() {
        return this.node.content
    }

    /**
     * @returns {window.HTMLMetaElement}
     */
    static get interface() {
        return HTMLMetaElement
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
