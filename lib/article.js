import { HTMLElementAssembler } from './element'

export class Article extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Article}
 */
export function article(init) {
    return new Article(init)
}

Article.register()
