import { HTMLElementAssembler } from './element'

const { HTMLMenuElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-menu-element
 */
export class Menu extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLMenuElement
     * @override
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
