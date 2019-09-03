import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-summary-element
 */
export class Summary extends HTMLElementAssembler {}

export const HTMLSummary = Summary

/**
 * @param {*} [init]
 * @returns {Summary}
 */
export function summary(init) {
    return new Summary(init)
}

Summary.register()
