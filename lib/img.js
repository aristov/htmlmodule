import { HTMLElementAssembler } from './html'

export class Img extends HTMLElementAssembler {
    set src(src) {
        this.node.src = src
    }

    get src() {
        return this.node.src
    }

    set alt(alt) {
        this.node.alt = alt
    }

    get alt() {
        return this.node.alt
    }

    set width(width) {
        this.node.width = width
    }

    get width() {
        return this.node.width
    }

    set height(height) {
        this.node.height = height
    }

    get height() {
        return this.node.height
    }
}

/**
 * @param {*} [init]
 * @returns {Img}
 */
export function img(init) {
    return new Img(init)
}
