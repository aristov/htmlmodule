import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLPictureElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-picture-element
 */
export class HTMLPicture extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLPictureElement
     * @override
     */
    static get interface() {
        return HTMLPictureElement || super.interface
    }
}

/**
 * @alias HTMLPicture
 */
export { HTMLPicture as Picture }

/**
 * @param {*} [init]
 * @returns {HTMLPicture}
 */
export function picture(init) {
    return new HTMLPicture(init)
}

HTMLPicture.register()
