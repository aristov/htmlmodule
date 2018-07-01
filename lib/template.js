import { HTMLElementAssembler } from './element'

const { HTMLTemplateElement } = window

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
        return HTMLTemplateElement
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
