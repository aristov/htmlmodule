import { HTMLElementAssembler } from './element'

const { HTMLTableColElement } = window

export class ColGroup extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLTableColElement}
     */
    static get interface() {
        return HTMLTableColElement
    }
}

/**
 * @param {*} [init]
 * @returns {ColGroup}
 */
export function colgroup(...init) {
    return new ColGroup(...init)
}
