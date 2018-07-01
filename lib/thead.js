import { TBody } from './tbody'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-thead-element
 */
export class THead extends TBody {
    /**
     * @returns {string}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {THead}
 */
export function thead(init) {
    return new THead(init)
}

const LOCAL_NAME = thead.name

THead.register()
