import { HTMLElementAssembler } from './element'

export class NoScript extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {NoScript}
 */
export function noscript(init) {
    return new NoScript(init)
}
