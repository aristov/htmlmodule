import { HTMLElementAssembler } from './html'

const { HTMLHtmlElement, HTMLDocument } = window

const WRONG_OWNER_DOCUMENT_ERROR = 'The ownerDocument must be an instance of the HTMLDocument class!'
const WRONG_PARENT_ELEMENT_ERROR = 'The parentElement must be an instance of the HTMLHtmlElement class!'
const NO_DOCUMENT_ELEMENT_ERROR = 'The ownerDocument must have a documentElement child node!'

export class Body extends HTMLElementAssembler {
    /**
     * @param {HTMLHtmlElement} parentElement
     */
    set parentElement(parentElement) {
        if(parentElement instanceof HTMLHtmlElement) {
            const body = parentElement.querySelector('body')
            if(body) parentElement.replaceChild(this.node, body)
            else parentElement.appendChild(this.node)
        }
        else throw Error(WRONG_PARENT_ELEMENT_ERROR)
    }

    /**
     * @param {HTMLDocument} ownerDocument
     */
    set ownerDocument(ownerDocument) {
        if(ownerDocument instanceof HTMLDocument) {
            const { documentElement } = ownerDocument
            if(documentElement) this.parentElement = documentElement
            else throw Error(NO_DOCUMENT_ELEMENT_ERROR)
        }
        else throw Error(WRONG_OWNER_DOCUMENT_ERROR)
    }
}

/**
 * @param {*} init
 * @returns {Body}
 */
export function body(init) {
    return new Body(init)
}
