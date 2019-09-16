import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTemplateElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-template-element
 */
export class HTMLTemplate extends HTMLElementAssembler {
    /**
     * @returns {DocumentFragmentAssembler}
     */
    get content() {
        return this.getInstanceOf(this.node.content)
    }

    /**
     * @returns {interface} HTMLTemplateElement
     * @override
     */
    static get interface() {
        return HTMLTemplateElement || super.interface
    }
}

/**
 * @alias HTMLTemplate
 */
export { HTMLTemplate as Template }

/**
 * @param {*} [init]
 * @returns {HTMLTemplate}
 */
export function template(init) {
    return new HTMLTemplate(init)
}

HTMLTemplate.register()
