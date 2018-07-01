import { HTMLElementAssembler } from './element'

const { map } = Array.prototype
const { HTMLDataListElement } = window

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
        return HTMLDataListElement
    }
}

/**
 * @param {*} [init]
 * @returns {DataList}
 */
export function datalist(init) {
    return new DataList(init)
}

DataList.register()
