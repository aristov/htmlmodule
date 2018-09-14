import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-hgroup-element
 */
export class HGroup extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {HGroup}
 */
export function hgroup(init) {
    return new HGroup(init)
}

HGroup.register()
