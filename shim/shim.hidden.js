if (!('hidden' in HTMLElement.prototype)) {
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
    // document.head.appendChild(style);
}

function style() {
    const style = document.createElement('style');
    style.rel = 'stylesheet';
    style.textContent = '[hidden]{display:none}';
    return style;
}
