import { EventTargetAssembler } from 'dommodule/lib/EventTargetAssembler'
import { DocumentAssembler } from 'dommodule/lib/DocumentAssembler'

const { getTargetOf } = EventTargetAssembler

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-window-object
 */
export class WindowAssembler extends EventTargetAssembler {
    /**
     * @returns {DocumentAssembler|HTMLDocumentAssembler}
     */
    get document() {
        const node = getTargetOf(this).document
        const assembler = DocumentAssembler.resolve(node)
        return assembler.getInstanceOf(node)
    }
}
