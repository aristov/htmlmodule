import { HtmlElem } from './HTMLElementAssembler'

const { HTMLIFrameElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-iframe-element
 */
export class HTMLIFrame extends HtmlElem {
    /**
     * @param {string} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {string}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {string} srcdoc
     */
    set srcdoc(srcdoc) {
        this.node.srcdoc = srcdoc
    }

    /**
     * @returns {string}
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
     * @param {boolean} allowFullScreen
     */
    set allowFullScreen(allowFullScreen) {
        this.node.allowFullScreen = allowFullScreen
    }

    /**
     * @returns {boolean}
     */
    get allowFullScreen() {
        return this.node.allowFullScreen
    }

    /**
     * @param {boolean} allowPaymentRequest
     */
    set allowPaymentRequest(allowPaymentRequest) {
        this.node.allowPaymentRequest = allowPaymentRequest
    }

    /**
     * @returns {boolean}
     */
    get allowPaymentRequest() {
        return this.node.allowPaymentRequest
    }

    /**
     * @param {number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {string} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {string}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {DocumentAssembler|*|null}
     */
    get contentDocument() {
        return this.getInstanceOf(this.node.contentDocument)
    }

    /**
     * @returns {interface} HTMLIFrameElement
     * @override
     */
    static get interface() {
        return HTMLIFrameElement || super.interface
    }
}

/**
 * @alias HTMLIFrame
 */
export { HTMLIFrame as IFrame }

/**
 * @param {*} [init]
 * @returns {HTMLIFrame}
 */
export function iframe(init) {
    return new HTMLIFrame(init)
}

HTMLIFrame.register()
