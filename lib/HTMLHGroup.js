import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-hgroup-element
 */
export class HTMLHGroup extends HTMLElementAssembler {}

/**
 * @alias HTMLHGroup
 */
export { HTMLHGroup as HGroup }

/**
 * @param {*} [init]
 * @returns {HTMLHGroup}
 */
export function hgroup(init) {
    return new HTMLHGroup(init)
}

HTMLHGroup.register()
