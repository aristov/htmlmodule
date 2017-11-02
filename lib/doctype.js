import { DocumentTypeAssembler } from 'dommodule'
import { HTMLDocumentAssembler } from './document'

export class HTMLDocumentTypeAssembler extends DocumentTypeAssembler {
    /**
     * @returns {HTMLDocumentAssembler}
     */
    static get documentAssembler() {
        return HTMLDocumentAssembler
    }
}
