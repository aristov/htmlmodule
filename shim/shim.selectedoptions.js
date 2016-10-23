if(!('selectedOptions' in HTMLSelectElement.prototype)) {
    const filter = Array.prototype.filter;
    const checkSelected = option => option.selected;
    Object.defineProperty(HTMLSelectElement.prototype, 'selectedOptions', {
        get() {
            return filter.call(
                this.querySelectorAll('option'),
                checkSelected);
        }
    });
}
