import { HTMLElementAssembler } from './element'
import { Area } from './area'

const _map = Array.prototype.map
const { HTMLMapElement } = window

export class Map extends HTMLElementAssembler {
    /**
     * @returns {Area[]}
     */
    get areas() {
        return _map.call(this.node.areas, node => {
            return this.getInstanceOf(node, Area)
        })
    }

    /**
     * @returns {(Img|Object)[]}
     */
    get images() {
        return _map.call(this.node.images, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @returns {window.HTMLMapElement}
     */
    static get interface() {
        return HTMLMapElement
    }
}

/**
 * @param {*} [init]
 * @returns {Map}
 */
export function map(init) {
    return new Map(init)
}

Map.register()
