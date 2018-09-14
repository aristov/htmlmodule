import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLTemplateElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-template-element
 */
export class Template extends HTMLElementAssembler {
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
 * @param {*} [init]
 * @returns {Template}
 */
export function template(init) {
    return new Template(init)
}

Template.register()
