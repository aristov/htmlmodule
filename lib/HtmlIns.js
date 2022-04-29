import { HtmlMod } from './HtmlMod'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ins-element
 */
export class HTMLIns extends HtmlMod {}

/**
 * @alias HTMLIns
 */
export { HTMLIns as Ins }

/**
 * @param {*} [init]
 * @returns {HTMLIns}
 */
export function ins(init) {
    return new HTMLIns(init)
}

HTMLIns.register()
