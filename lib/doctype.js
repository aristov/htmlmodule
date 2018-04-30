import { DocumentTypeAssembler } from 'dommodule/lib/doctype'
import { HTMLDocumentAssembler } from './document'

export class HTMLDocumentTypeAssembler extends DocumentTypeAssembler {
    /**
     * @returns {HTMLDocumentAssembler}
     */
    static get documentAssembler() {
        return HTMLDocumentAssembler
    }
}
