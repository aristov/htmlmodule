import { DocumentAssembler } from 'dommodule/lib/document'
import { HTMLElementAssembler } from './element'

const { HTMLIFrameElement } = window

export class IFrame extends HTMLElementAssembler {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srcdoc
     */
    set srcdoc(srcdoc) {
        this.node.srcdoc = srcdoc
    }

    /**
     * @returns {String}
     */
    get srcdoc() {
        return this.node.srcdoc
    }

    /**
     * @returns {DOMTokenList}
     */
    get sandbox() {
        return this.node.sandbox
    }

    /**
     * @param {Boolean} allowFullScreen
     */
    set allowFullScreen(allowFullScreen) {
        this.node.allowFullScreen = allowFullScreen
    }

    /**
     * @returns {Boolean}
     */
    get allowFullScreen() {
        return this.node.allowFullScreen
    }

    /**
     * @param {Boolean} allowPaymentRequest
     */
    set allowPaymentRequest(allowPaymentRequest) {
        this.node.allowPaymentRequest = allowPaymentRequest
    }

    /**
     * @returns {Boolean}
     */
    get allowPaymentRequest() {
        return this.node.allowPaymentRequest
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {DocumentAssembler|null}
     */
    get contentDocument() {
        return this.getInstanceOf(this.node.contentDocument, DocumentAssembler)
    }

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
export function iframe(init) {
    return new IFrame(init)
}
