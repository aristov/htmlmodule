import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLMetaElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-meta-element
 */
export class HTMLMeta extends HTMLElementAssembler {
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
 * @alias HTMLMeta
 */
export { HTMLMeta as Meta }

/**
 * @param {*} [init]
 * @returns {HTMLMeta}
 */
export function meta(init) {
    return new HTMLMeta(init)
}

HTMLMeta.register()
