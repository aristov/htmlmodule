import { HTMLElementAssembler } from './element'

const { HTMLCanvasElement } = window

export class Canvas extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLCanvasElement}
     */
    static get interface() {
        return HTMLCanvasElement
    }
}

/**
 * @param {*} [init]
 * @returns {Canvas}
 */
export function canvas(...init) {
    return new Canvas(...init)
}
