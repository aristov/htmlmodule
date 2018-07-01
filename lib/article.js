import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-article-element
 */
export class Article extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Article}
 */
export function article(init) {
    return new Article(init)
}

Article.register()
