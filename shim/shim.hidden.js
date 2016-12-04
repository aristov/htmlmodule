/**
 * HTMLElement.prototype.hidden implementation
 * @polyfill
 */
const { HTMLElement, document } = window

/**
 * Create a style element with the specified textContent
 * @param textContent
 * @returns {HTMLStyleElement}
 */
function style(textContent) {
    const element = document.createElement('style')
    element.textContent = textContent
    return element
}

if(!('hidden' in HTMLElement.prototype)) {
    Object.defineProperty(HTMLElement.prototype, 'hidden', {
        set(hidden) {
            if(hidden) this.setAttribute('hidden', '')
            else this.removeAttribute('hidden')
        },
        get() {
            return this.hasAttribute('hidden')
        }
    })
    const root = document.head || document.body
    const displaynone = style('[hidden]{display:none}')
    if(root) root.appendChild(displaynone)
}
