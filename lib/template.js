import { DocumentFragmentAssembler } from 'dommodule'
import { HTMLElementAssembler } from './element'

const { HTMLTemplateElement } = window

export class Template extends HTMLElementAssembler {
    /**
     * @returns {DocumentFragmentAssembler}
     */
    get content() {
        return this.getInstanceOf(this.node.content, DocumentFragmentAssembler)
    }

    /**
     * @returns {window.HTMLTemplateElement}
     */
    static get interface() {
        return HTMLTemplateElement
    }
}

/**
 * @param {*} [init]
 * @returns {Template}
 */
export function template(...init) {
    return new Template(...init)
}
