import { TBody } from './tbody'

export class THead extends TBody {
    /**
     * @returns {String}
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
