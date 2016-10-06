if(!Element.prototype.hasOwnProperty('id')) {
    Object.defineProperty(Element.prototype, 'id', {
        set(id) {
            this.setAttribute('id', id);
        },
        get() {
            return this.getAttribute('id');
        }
    });
}
