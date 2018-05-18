import { HTMLElementAssembler } from './element'

const { HTMLMenuElement } = window

export class Menu extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLMenuElement}
     */
    static get interface() {
        return HTMLMenuElement
    }
}

/**
 * @param {*} [init]
 * @returns {Menu}
 */
export function menu(init) {
    return new Menu(init)
}

Menu.register()
