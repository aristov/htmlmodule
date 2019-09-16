import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLMenuElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-menu-element
 */
export class HTMLMenu extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLMenuElement
     * @override
     */
    static get interface() {
        return HTMLMenuElement || super.interface
    }
}

/**
 * @alias HTMLMenu
 */
export { HTMLMenu as Menu }

/**
 * @param {*} [init]
 * @returns {HTMLMenu}
 */
export function menu(init) {
    return new HTMLMenu(init)
}

HTMLMenu.register()
