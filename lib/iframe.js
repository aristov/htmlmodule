import { HTMLElementAssembler } from './element'

const { HTMLIFrameElement } = window

export class IFrame extends HTMLElementAssembler {
    // todo
    /**
     * @returns {window.HTMLIFrameElement}
     */
    static get interface() {
        return HTMLIFrameElement
    }
}

/**
 * @param {*} [init]
 * @returns {IFrame}
 */
export function iframe(...init) {
    return new IFrame(...init)
}
