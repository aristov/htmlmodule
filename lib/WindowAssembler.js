import { EventTargetAssembler } from 'dommodule/lib/EventTargetAssembler'
import { DocumentAssembler } from 'dommodule/lib/DocumentAssembler'

const { Window } = window
const { getTargetOf } = EventTargetAssembler

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-window-object
 */
export class WindowAssembler extends EventTargetAssembler {
    /**
     * @param {string} url
     * @param {string} target
     * @param {string} features
     */
    open(url, target, features) {
        return WindowAssembler.getInstanceOf(getTargetOf(this).open(url, target, features))
    }

    /**
     * @returns {DocumentAssembler|HTMLDocumentAssembler}
     */
    get document() {
        const node = getTargetOf(this).document
        const assembler = DocumentAssembler.resolve(node)
        return assembler.getInstanceOf(node)
    }

    /**
     * @param {{}} [init]
     * @returns {Window}
     */
    static create(init) {
        return window
    }

    /**
     * @returns {interface} Window
     * @override
     */
    static get interface() {
        return Window
    }
}
