import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-article-element
 */
export class HTMLArticle extends HTMLElementAssembler {}

/**
 * @alias HTMLArticle
 */
export { HTMLArticle as Article }

/**
 * @param {*} [init]
 * @returns {HTMLArticle}
 */
export function article(init) {
    return new HTMLArticle(init)
}

HTMLArticle.register()
