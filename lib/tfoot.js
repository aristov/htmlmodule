import { TBody } from './tbody'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tfoot-element
 */
export class TFoot extends TBody {
    /**
     * @returns {string}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {TFoot}
 */
export function tfoot(init) {
    return new TFoot(init)
}

const LOCAL_NAME = tfoot.name

TFoot.register()
