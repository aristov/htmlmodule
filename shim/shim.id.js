if(!('id' in Element.prototype)) {
    Object.defineProperty(Element.prototype, 'id', {
        set(id) {
            this.setAttribute('id', id);
        },
        get() {
            return this.hasAttribute('id');
        }
    });
}
