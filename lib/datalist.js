import { HTMLElementAssembler } from './element'
import { HTMLOption } from './option'

const { prototype : { map } } = Array
const { HTMLDataListElement } = window

export class DataList extends HTMLElementAssembler {
    /**
     * @returns {HTMLOption[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstance(option, HTMLOption)
        })
    }

    /**
     * @returns {window.HTMLDataListElement}
     */
    static get interface() {
        return HTMLDataListElement
    }
}

/**
 * @param {*} [init]
 * @returns {DataList}
 */
export function datalist(...init) {
    return new DataList(...init)
}
