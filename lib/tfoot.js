import { TBody } from './tbody'

export class TFoot extends TBody {
    /**
     * @returns {String}
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
