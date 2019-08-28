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
     * @param {string} windowName
     * @param {string} windowFeatures
     */
    open(url, windowName, windowFeatures) {
        return getTargetOf(this).open(url, windowName, windowFeatures)
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
     * @returns {interface} Window
     * @override
     */
    static get interface() {
        return Window
    }
}
