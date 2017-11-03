import { HTMLElementAssembler } from './element'

const { HTMLDataListElement } = window

export class DataList extends HTMLElementAssembler {
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
