if (!'hidden' in HTMLElement.prototype) {
    const style = document.createElement('style');
    style.rel = 'stylesheet';
    style.textContent = '[hidden]{display:none}';
    document.head.appendChild(style);
    Object.defineProperty(HTMLElement.prototype, 'hidden', {
        set: function (hidden) {
            this.setAttribute('hidden', hidden);
        },
        get: function () {
            return this.getAttribute('hidden');
        }
    });
}