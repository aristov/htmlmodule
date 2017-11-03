import { HTMLElementAssembler } from './element'

const { HTMLOptGroupElement } = window

export class OptGroup extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLOptGroupElement}
     */
    static get interface() {
        return HTMLOptGroupElement
    }
}

/**
 * @param {*} [init]
 * @returns {OptGroup}
 */
export function optgroup(...init) {
    return new OptGroup(...init)
}
