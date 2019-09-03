import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLDataListElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-datalist-element
 */
export class DataList extends HTMLElementAssembler {
    /**
     * @returns {array.HTMLOption|array.HTMLElementAssembler}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstanceOf(option)
        })
    }

    /**
     * @returns {interface} HTMLDataListElement
     * @override
     */
    static get interface() {
        return HTMLDataListElement || super.interface
    }
}

export const HTMLDataList = DataList

/**
 * @param {*} [init]
 * @returns {DataList}
 */
export function datalist(init) {
    return new DataList(init)
}

DataList.register()
