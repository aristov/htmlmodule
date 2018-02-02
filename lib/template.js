import { HTMLElementAssembler } from './element'

const { HTMLTemplateElement } = window

export class Template extends HTMLElementAssembler {
    // todo
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
