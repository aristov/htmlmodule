/**
 * HTMLElement.prototype.hidden implementation
 *
 * @polyfill
 */
const { HTMLElement, document } = window;

if(!HTMLElement.prototype.hasOwnProperty('hidden')) {
    Object.defineProperty(HTMLElement.prototype, 'hidden', {
        set(hidden) {
            hidden?
                this.setAttribute('hidden', '') :
                this.removeAttribute('hidden');
        },
        get() {
            return this.hasAttribute('hidden');
        }
    });
    const root = document.head || document.body;
    const displaynone = style('[hidden]{display:none}');
    if(root) root.appendChild(displaynone);
}

function style(textContent) {
    const style = document.createElement('style');
    style.textContent = textContent;
    return style;
}
