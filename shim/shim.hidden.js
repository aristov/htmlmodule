if (!('hidden' in HTMLElement.prototype)) {
    /*const style = document.createElement('style');
    style.rel = 'stylesheet';
    style.textContent = '[hidden]{display:none}';
    document.head.appendChild(style);*/
    console.log(HTMLElement.prototype);
    Object.defineProperty(HTMLElement.prototype, 'hidden', {
        set(hidden) {
            console.log(this, hidden);
            hidden?
                this.setAttribute('hidden', '') :
                this.removeAttribute('hidden');
        },
        get() {
            return this.hasAttribute('hidden');
        }
    });
}