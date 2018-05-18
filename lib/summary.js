import { HTMLElementAssembler } from './element'

export class Summary extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {Summary}
 */
export function summary(init) {
    return new Summary(init)
}

Summary.register()
