import { HTMLElementAssembler } from './HTMLElementAssembler'

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
        return HTMLMenuElement || super.interface
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
