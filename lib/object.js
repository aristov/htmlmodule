import { HTMLElementAssembler } from './element'

const { HTMLObjectElement } = window
const LOCAL_NAME = 'object'

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the native `Object` class from the ECMAScript standard
 * https://tc39.github.io/ecma262/#sec-object-objects
 */
export class HTMLObject extends HTMLElementAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {window.HTMLObjectElement}
     */
    static get interface() {
        return HTMLObjectElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLObject}
 */
export function object(...init) {
    return new HTMLObject(...init)
}
